import '../styles/index.scss';

let cardIds = [1, 2, 5];
let [car1, car2, car3] = cardIds;

console.log(car1, car2, car3);

let cardIds2 = [1, 2, 5];
let [cara, ...remainingCars] = cardIds2;

console.log(cara, remainingCars);

let carIds3 = [1, 7, 9];
let remainingCars2;
[, ...remainingCars2] = carIds3;

console.log(remainingCars);