//NIESTETY
import { createTooltip } from "./createTooltip";
function eventRetriever(data) {
  let rows = [];
  data.result.items.forEach((element) => {
    let row = [data.result.summary];
    let {
      summary = "brak",
      description = "brak",
      start: { dateTime: dateStart, date: altervativeDateStart },
      end: { dateTime: dateEnd, date: alternativeDateEnd },
    } = element;
    //if event is full one day, api returns it in another format, not in start.dateTime but in start.date
    dateStart = dateStart || altervativeDateStart;
    dateEnd = dateEnd || alternativeDateEnd;
    dateStart = new Date(dateStart);
    dateEnd = new Date(dateEnd);

    //it's hidden only for test!
    row.push(
      summary,
      createTooltip(summary, dateStart, dateEnd, description),
      dateStart,
      dateEnd
    );
    rows.push(row);
  });
  return rows;
  //data.result.items.forEach((element) => console.log(element));
}

function calendarRetriever(data) {
  let calendarsID = [];
  data.items.forEach((element) => {
    calendarsID.push(element.id);
  });
  return calendarsID;
}

export { eventRetriever, calendarRetriever };
// moim celem jest zwrócenie danych w formacie odpowiednim dla google'a celander.
/**
 *
 * [nazwa_kalendarza, tytuł_eventu, opis, początek, koniec]
 *
 */
