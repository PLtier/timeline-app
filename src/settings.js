let eventsConfiguration = {
  calendarId: "primary",
  maxResults: 2500,
  timeMax: "2023-12-31T23:59:59+01:00",
  timeMin: "2023-01-01T00:00:00+01:00",
  showDeleted: false,
  singleEvents: true,
};
let calendarsConfiguration = {
  maxResults: 2500,
  showDeleted: false,
  showHidden: false,
};
let calendarViewOptions = {
  chartType: "Timeline",
  containerId: "chart_div",
  options: {
    //width: 1500,
    //height: 900,
    chartArea: {
      width: "80%", // make sure this is the same for the chart and control so the axes align right
      height: "80%",
    },
    backgroundColor: "#ffd",
  },
  view: {
    columns: [0, 1, 2, 3, 4],
  },
  tooltip: { isHtml: true },
  timeline: {
    rowLabelStyle: { fontName: "Helvetica", fontSize: 24, color: "#603913" },
    barLabelStyle: { fontName: "Garamond", fontSize: 14 },
  },
};

let rangeFilterConfig = {
  controlType: "ChartRangeFilter",
  containerId: "filter_div",
  options: {
    filterColumnIndex: 3,
    ui: {
      chartType: "ScatterChart",
      chartOptions: {
        width: 985,
        height: 70,
        chartArea: {
          width: "80%", // make sure this is the same for the chart and control so the axes align right
          height: "80%",
        },
        hAxis: {
          baselineColor: "none",
        },
      },

      chartView: {
        columns: [3, 4],
      },
    },
  },
};
export {
  eventsConfiguration,
  calendarsConfiguration,
  calendarViewOptions,
  rangeFilterConfig,
};
