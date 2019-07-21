import '../styles/index.scss';

console.log('HELLO WORLD!!!!!!');

console.log(carId);

var carId = 42; // not an error - carId just undefined before value is declared
let carId2 = 100; // carId2 will throw error

if (true) {
    var foo = 9;
    let foo2 = 10;
}

console.log(foo, foo2); // foo will work, but let has block scoping so is undefined outside of the if statement