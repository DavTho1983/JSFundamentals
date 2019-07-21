import '../styles/index.scss';

function sendCars(day, ...allCarIds) {
    allCarIds.forEach(id => console.log(id));
    console.log(day);
}

sendCars('Monday', 100, 200, 555);