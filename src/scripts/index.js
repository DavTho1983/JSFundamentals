import '../styles/index.scss';

// this

let o = {
    carId: 123,
    getId: function(prefix) {
        console.log(this);
        return prefix + this.carId;
    }
};


let newCar = { carId: 456 };

console.log(o.getId.call(newCar));

// apply

console.log(o.getId.apply(newCar, ['ID: ']));