import "../styles/index.scss";
import { Car } from "./models/car";

try {
    let car = newCar;
} catch (error) {
    console.log("error", error);
} finally {
    console.log("this always executes");
}

console.log("continuing...");

try {
    throw new Error("new custom error");
} catch (error) {
    console.log("error", error);
} finally {
    console.log("this always executes");
}