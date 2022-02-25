function newFunction() {
  return new Date();
}
let now = newFunction();
let h2 = document.getElementById("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

h2.innerHTML =
  days[now.getDay()] + " " + now.getHours() + ":" + now.getMinutes();


//challange2
function disentercity(event) {
  event.preventDefault();
  let enteredcity = document.getElementById("exampleInputEmail1c");
  let h1 = document.getElementById("h1");
  h1.innerHTML = enteredcity.value;
}
let form = document.getElementById("formId");
form.addEventListener("submit", disentercity);
let button1 = document.getElementById("button1");
button1.addEventListener("click", disentercity);

//challange 3
let celsius = document.getElementById("celsius");
let fahren = document.getElementById("Fahrenheit");
let innerh1 = document.getElementById("inh1");
function displaycelsius(event) {
  innerh1.innerHTML = 17;
  event.preventDefault();
}
function displayfahren(event) {
  innerh1.innerHTML = 66;
  event.preventDefault();
}
celsius.addEventListener("click", displaycelsius);
fahren.addEventListener("click", displayfahren);
