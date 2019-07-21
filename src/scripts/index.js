import '../styles/index.scss';

console.log(Number.parseInt('55asd'));
console.log(Number.parseFloat('55.88asd'));

let i = 0;

for (; i < 12; i++) {
    if (i === 8) {
        break;
    }
}

console.log(i);

for (let j = 0; j < 4; j++) {
    if (j === 2) {
        continue;
    }

    console.log(j);
}