let time = document.getElementById("time");
let currFormatText = document.getElementById("currFormat");
let currFormat = ["(DD/MM/YYYY)", "(MM/DD/YYYY)", "(YYYY/MM/DD)"];
let date = new Date();
let chosenFormat = 0;
let interval = setInterval(update, 1000);

function update() {
  date = new Date();
  let day = format(date.getDate());
  let month = format(date.getMonth() + 1);
  let year = format(date.getFullYear());
  let hour = format(date.getHours());
  let mins = format(date.getMinutes());
  let secs = format(date.getSeconds());
  if (chosenFormat == 0) {
    time.innerHTML = `Today is ${day}/${month}/${year} @ ${hour}:${mins}:${secs}`;
  } else if (chosenFormat == 1) {
    time.innerHTML = `Today is ${month}/${day}/${year} @ ${hour}:${mins}:${secs}`;
  } else {
    time.innerHTML = `Today is ${year}/${month}/${day} @ ${hour}:${mins}:${secs}`;
  }
}

function format(arg) {
  if (arg < 10) return `0${arg}`;
  else return arg;
}

function changeFormat() {
  chosenFormat++;
  if (chosenFormat >= 3) {
    chosenFormat = 0;
  }
  currFormatText.innerHTML = `${currFormat[chosenFormat]}`;
  update();
}
