import '../styles/index.scss';

// this

let o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};

console.log(o.getId());