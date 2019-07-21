import '../styles/index.scss';

let car = {
    id: 5000,
    style: 'convertible'
};

// let { id, style } = car;
let id, style;
({ id, style } = car);

console.log(id, style);