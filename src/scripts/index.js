import "../styles/index.scss";
import { Car } from "./models/car";

let form = document.getElementById("user-form");

form.addEventListener("submit", event => {
    let user = form.elements["user"];
    let userError = document.getElementById("user-error");

    if (user.value.length < 4) {
        userError.textContent = "Invalid entry";
        userError.style.color = "red";
        user.style.borderColor = "red";
        user.focus();
    }

    let avatarFile = form.elements["avatar-file"];

    console.log(user.value, avatarFile.value);
    event.preventDefault();
});