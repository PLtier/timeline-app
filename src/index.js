import "regenerator-runtime/runtime";
import { authenticate, loadClient, execute } from "./importData.js";
import { initialDraw } from "./createCalendar";

google.charts.load("current", { packages: ["timeline", "controls"] });
google.charts.setOnLoadCallback(initialDraw);

gapi.load("client:auth2", function () {
  gapi.auth2.init({
    client_id:
      "CLIENT_ID",
  });
});

const btnauth = document.querySelector(".auth");

btnauth.addEventListener("click", () => {
  authenticate().then(loadClient);
});

const btnexec = document.querySelector(".exec");

btnexec.addEventListener("click", () => {
  execute();
});
