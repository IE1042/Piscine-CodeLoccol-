const day = prompt("Enter a day of the week:");

if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
} else {
  console.log("weekday");
}