'use strict';

function sumFor(...arr) {
    let result = 0;
    if(arr.length === 0) return result;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function sumForOf(...arr) {
    let result = 0;
    if(arr.length === 0) return result;
    for (const num of arr) {
        result += num;
    }
    return result;
}

function sumWhile(...arr) {
    let result = 0;
    if(arr.length === 0) return result;
    while (arr.length) {
        result += arr.shift();
    }
    return result;
}

function sumDoWhile(...arr) {
    let result = 0;
    if(arr.length === 0) return result;
    do {
        result += arr.shift();
    } while (arr.length);
    return result;
}

function sumArrayReduse(...arr) {
    if(arr.length === 0) return 0;
    return arr.reduce((acc, elem) => acc + elem, 0);
}

console.log(sumFor(1, 2, 3));
console.log(sumForOf(0));
console.log(sumWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumArrayReduse(10, -1, -1, -1));