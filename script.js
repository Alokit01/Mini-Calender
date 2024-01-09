const month = document.querySelector(".month");
const weekday = document.querySelector(".weekday");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
 document.addEventListener("DOMContentLoaded", () => {
 const date = new Date();
console.log(date, "date");

console.log("month",date.toLocaleDateString("en-US",{month:"long"}))
// The getMonth() method in JavaScript returns the month as a zero-based value. This means January is represented by 0, February by 1, and so on. If you want to display the month in a more human-readable format (1 for January, 2 for February, etc.), you need to add 1 to the result.
  // Adding 1 to get the month in human-readable format
//   const monthValue = date.getMonth() + 1;

//   console.log("month", monthValue);
console.log("day", date.getDate());
console.log("year", date.getFullYear());
console.log("weekday",date.toLocaleDateString("en-US",{weekday:"long"}))
day.textContent=date.getDate();
year.textContent=date.getFullYear();
month.textContent=date.toLocaleDateString("en-US",{month:"long"})
weekday.textContent=date.toLocaleDateString("en-US",{weekday:"long"})

});
function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeElement = document.getElementById('time');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startDigitalClock() {
  setInterval(updateDigitalClock, 1000);
}

startDigitalClock();

