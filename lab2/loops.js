'use strict';

function range(start, end) {
    const array = [];
    for(let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function rangeOdd(start, end) {
    if(start % 2 === 0) start++;
    const array = [];
    for(let i = start; i <= end; i += 2) {
        array.push(i);
    }
    return array;
}

console.log(range(15, 30));
console.log(rangeOdd(15, 30));


