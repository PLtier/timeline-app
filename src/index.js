import 'dotenv/config'
import "regenerator-runtime/runtime";
import { authenticate, loadClient, execute } from "./importData.js";
import { initialDraw } from "./createCalendar";

google.charts.load("current", { packages: ["timeline", "controls"] });
google.charts.setOnLoadCallback(initialDraw);

gapi.load("client:auth2", function () {
  gapi.auth2.init({
    client_id:
      process.env.CLIENT_ID,
  });
});

const btnauth = document.querySelector(".auth");

btnauth.addEventListener("click", () => {
  authenticate().then(loadClient).then(execute);
});