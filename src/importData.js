/**
 * Sample JavaScript code for calendar.events.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */
import { calendarsConfiguration, eventsConfiguration } from "./settings";
import { calendarRetriever, eventRetriever } from "./convertData";
import { drawChart } from "./createCalendar";
function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope:
        "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.addons.execute",
    })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyCP4CRIRjyxYZpmcLy8gbCFzF25AMQHU6o");
  return gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}

async function getEvents(id) {
  let config = { ...eventsConfiguration }; //copy object, not create reference
  config.calendarId = id; //add id of calendar
  try {
    const response = await gapi.client.calendar.events.list(config);
    return eventRetriever(response);
  } catch (err) {
    console.error("getEvents error", err);
  }
}

async function getCalendarList() {
  try {
    const response = await gapi.client.calendar.calendarList.list(
      calendarsConfiguration
    );
    return calendarRetriever(response.result);
  } catch (error) {
    console.error("getCalendarList error", error);
  }
}

async function getEventsFrom(calendarsID) {
  return await Promise.all(
    calendarsID.map(async (id) => {
      const response = await getEvents(id);
      return response;
    })
  );
}

// Make sure the client is loaded and sign-in is complete before calling this method.
async function execute() {
  let calendarsID = await getCalendarList();
  let raw_events = await getEventsFrom(calendarsID);
  let events = raw_events.flat();
  drawChart(events);
}

export { execute, loadClient, authenticate };
