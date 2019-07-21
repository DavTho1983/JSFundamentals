import '../styles/index.scss';

// this

let o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};


let newCar = { carId: 456 };

// bind
// bind makes a copy of the function and changes this context

let newFn = o.getId.bind(newCar);

console.log(newFn());