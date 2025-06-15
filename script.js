////////////////////
// URL PARAMETERS //
////////////////////

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dateFormat = urlParams.get("dateFormat") || "DD MMM YYYY";
const timeFormat = urlParams.get("timeFormat") || "hh:mmA";

///////////////
// FUNCTIONS //
///////////////

function setTime() {
  const date = moment().format(dateFormat);
  const time = moment().format(timeFormat);
  document.getElementById("timeLabel").innerHTML = `<span id="time">${time}</span><span id="date">${date}</span>`;
  setTimeout(setTime, 1000);
}

setTime();
