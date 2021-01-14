import "regenerator-runtime/runtime";
import { authenticate, loadClient, execute } from "./importData.js";
import { initialDraw } from "./createCalendar";

google.charts.load("current", { packages: ["timeline", "controls"] });
google.charts.setOnLoadCallback(initialDraw);

gapi.load("client:auth2", function () {
  gapi.auth2.init({
    client_id:
      "803492294937-7dieop2qefumqargv0ojst1adc7i9963.apps.googleusercontent.com",
  });
});

const btnauth = document.querySelector(".auth");

btnauth.addEventListener("click", () => {
  authenticate().then(loadClient);
});

const btnexec = document.querySelector(".exec");

btnexec.addEventListener("click", () => {
  execute();

  return gapi.client.calendar.events
    .list({
      calendarId: "hm55821755sl7v0g8i3l18noec@group.calendar.google.com",
      showDeleted: false,
      singleEvents: true,
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
});
