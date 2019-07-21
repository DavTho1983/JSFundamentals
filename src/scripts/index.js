import '../styles/index.scss';

function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

let carIds = [100, 300, 500];
startCars(...carIds);

let carCodes = 'abc';
startCars(...carCodes);