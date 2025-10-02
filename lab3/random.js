'use strict';

function random(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    const x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}

console.log(random(0, 10));