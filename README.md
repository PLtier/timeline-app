# Hi 👋
It's a timeline app which fetchs events from your google calendar and displays it in timeline with controler for changing range of dates. Refresh feature is already there.
Check it out: https://google-calendar-timeline.netlify.app/
### Stack ⚙️
* vanilla javascript
* Google charts (timeline, dashboard and chart range filter)
* Google calendar API

### Requirement
Project needs access to Google API calendar. Or you can check out this out on a public site.
### Accessing Google API calendar
[Quickstart](https://developers.google.com/calendar/quickstart/js)
You have to create a new project in your Google API's, then get its "CLIENT ID", then create and get "API Key".
up to 1 000 000 000 queries are free. Then put "CLIENT ID" to index.js and "API Key" to importData.js.
