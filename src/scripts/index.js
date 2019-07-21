import '../styles/index.scss';

console.log((5 > 4) ? 'yes' : 'no');

console.log(5 > 44 ? 'yes' : 'no');

//Function and block scope

function startCar(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override...';
        console.log(message); //finds variable in parent function unless overridden locally
    };
    startFn();
    console.log(message);
}

startCar(123);