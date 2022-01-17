// date.html
//   Illustrates the use of the Date object by
//   displaying the parts of a current date and
//   using two Date objects to time a calculation

// Get the current date

var today = new Date();

// Fetch the various parts of the date
var dateString = today.toLocaleString().split(",")[1];
var date = today.getDate();
var year = today.getFullYear();
var day = today.getDay();
var month = today.getMonth();
//Write your own code here
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Display the parts
// document.write(Date().getDate().toString() + ' ' + day);
document.write(
  "Today: " +
    days[day] +
    " " +
    date +
    " " +
    months[month] +
    ", " +
    year +
    " " +
    dateString
);
//Write your own code here
