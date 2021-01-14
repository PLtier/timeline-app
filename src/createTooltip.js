import humanizeDuration from "humanize-duration";

function createTooltip(title, startDate, endDate, description) {
  let dates = getEndToStart(startDate, endDate);
  let duration = getDuration(startDate, endDate);
  let styles = `
font-family:Arial;font-size:12px;color:#000000;opacity:1;margin:0;font-style:none;text-decoration:none;font-weight:
`;
  //white space pre used here
  let template = `
<div>
  <div class="google-visualization-tooltip" style="pointer-events: none;">
    <ul class="google-visualization-tooltip-item-list">
      <li class="google-visualization-tooltip-item"><span style="${styles}bold;white-space:pre;">${title}</span></li>
    </ul>
    <div class="google-visualization-tooltip-separator"></div>
    <ul class="google-visualization-tooltip-action-list">
      <li class="google-visualization-tooltip-action"><span style="${styles}none;white-space:pre;">${dates}</span></li>
      <li class="google-visualization-tooltip-action"><span style="${styles}bold;">Duration:</span><span style="${styles}none;">${duration}</span></li>
      <li class="google-visualization-tooltip-action"><span style="${styles}none;">${description}</span></li>
    </ul>
  </div>
</div>
`;
  return template;
}

function getEndToStart(startDate, endDate) {
  //format of show
  const options = { year: "numeric", month: "short", day: "numeric" };
  //undefined means language of output will be set based on browser settings.
  let beginning = startDate.toLocaleDateString(undefined, options);
  let ending = endDate.toLocaleDateString(undefined, options);
  //if days are the same log only this specific day.
  if (startDate.toDateString() == endDate.toDateString()) {
    return beginning || ending;
  } else {
    return `${beginning} - ${ending}`;
  }
}

function getDuration(startDate, endDate) {
  let diff = endDate - startDate;
  return humanizeDuration(diff, { units: ["y", "d", "h"] });
}

export { createTooltip };
