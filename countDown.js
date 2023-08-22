const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveaway = document.querySelector(".giveaway");
let deadline = document.querySelector(".deadline");
let timeLeft = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let date = new Date(tempYear, tempMonth, tempDay + 10, 11, 34, 0);
//*
//! get days dynamically
let day = weekdays[date.getDay()];
//! get months dynamically
let month = months[date.getMonth()];
//
let year = date.getFullYear();
let dateOfmonths = date.getDate();
let hourFormat = date.getHours();
let minutesFormat = date.getMinutes();

giveaway.textContent = `Giveaway Ends On ${day}, ${dateOfmonths} ${month} ${year} ${hourFormat}:${minutesFormat}am`;

let futureTime = date.getTime();

console.log(futureTime);

function remainingTime() {
  let currentTime = new Date().getTime();
  let remaining = futureTime - currentTime;
  console.log(remaining);

  var calcDay = 24 * 60 * 60 * 1000;
  var calcHours = 60 * 60 * 1000;
  var calcMinutes = 60 * 1000;

  let daysReminder = Math.floor(remaining / calcDay);
  let hrsReminder = Math.floor((remaining % calcDay) / calcHours);
  let minsReminder = Math.trunc((remaining % calcHours) / calcMinutes);
  let secsReminder = Math.trunc((remaining % calcMinutes) / 1000);

  let reminder = [daysReminder, hrsReminder, minsReminder, secsReminder];

  function format(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  timeLeft.forEach((e, i) => {
    e.innerHTML = format(reminder[i]);
  });

  if (remaining < 0) {
    clearInterval(countdown);
    deadline.innerHTML = "<h4>sorry the giveaway is locked</h4>";
  }
}
let countdown = setInterval(remainingTime, 1000);

remainingTime();
