import "../styles/index.scss";
import { Car } from "./models/car";

let promise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "somevalue");
});

console.log(promise);

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "someothervalue");
});

console.log(promise2);

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "someValue");
});

promise3.then(
    value => console.log("fulfilled:" + value),
    error => console.log("rejected: " + error)
);