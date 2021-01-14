import { createTooltip } from "./createTooltip";
import { calendarViewOptions, rangeFilterConfig } from "./settings";

let dashboard;

//to improve

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
      "lol",
      "lol",
      createTooltip("lol", new Date(2020, 1, 1), new Date(2020, 1, 10), "lol"),
      new Date(2020, 1, 1),
      new Date(2020, 1, 10),
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
