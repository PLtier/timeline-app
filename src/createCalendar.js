import { createTooltip } from "./createTooltip";
import { calendarViewOptions, rangeFilterConfig } from "./settings";

let dashboard;


function configureTable(data) {
  let table = new google.visualization.DataTable();
  table.addColumn({ type: "string", id: "Kalendarz" });
  table.addColumn({ type: "string", id: "Tytuł" });
  table.addColumn({ type: "string", role: "tooltip", p: { html: true } });
  table.addColumn({ type: "date", id: "Start" });
  table.addColumn({ type: "date", id: "End" });
  table.addRows(data);
  return table;
}

function initialDraw() {
  let container = document.getElementById("example3.1");
  dashboard = new google.visualization.Dashboard(container);
  let rangeFilter = new google.visualization.ControlWrapper(rangeFilterConfig);
  let timeline = new google.visualization.ChartWrapper(calendarViewOptions);
  let dataTable = configureTable([
    [
      "Here will be your calendars",
      "There will be your events. Hover on the event to read the tooltip made up of additional information",
      createTooltip("This is title", new Date(2023, 1, 1), new Date(2023, 1, 10), "This is description"),
      new Date(2023, 1, 1),
      new Date(2023, 1, 10),
    ],
  ]);
  dashboard.bind(rangeFilter, timeline);
  dashboard.draw(dataTable, calendarViewOptions);
}

function drawChart(data) {
  let dataTable = configureTable(data);
  dashboard.draw(dataTable, calendarViewOptions);
}

export { initialDraw, drawChart };
