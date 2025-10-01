'use strict';

function avarage(x, y) {
    return (x + y) / 2;
}

function square(x) {
    return x * x;
}  

function cube(x) {
    return x * x * x;
}  

function calculate() {
    const array = [];
    for(let i = 0; i < 10; i++) {
        let a = square(i);
        let b = cube(i);
        array.push(avarage(a, b));
    }
    return array;
}

console.log(calculate());