import "../styles/index.scss";
import { Car } from "./models/car";

console.log(window.innerWidth);
console.log(innerWidth);

let intervalID = setInterval(function() {
    console.log("1 second passed");
}, 1000);

clearInterval(intervalID);

console.log(location.href);
console.log(document.location.href);

let el = document.getElementById("first");
let els = document.getElementsByClassName("p1");
let els2 = document.getElementsByTagName("p");

console.log(el);
console.log(els[0]);
console.log(els2);

el.textContent = "New content...";
el.setAttribute("foo", "fooValue");
el.classList.add("p2");
el.style.color = "magenta";

console.log(el);