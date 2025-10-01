'use strict';

const array = [12, -150, true, true, 1n, 'hello', '', Symbol('u'), false, () => {}, 42, { a: 1 }, undefined, Infinity, function() {}, void 0, NaN, Symbol('sym'), 9007199254740991n, new Date(), null];

const dataTypes = {};

for(const item of array) {
    const type = typeof item;
    if(!(type in dataTypes)) {
        dataTypes[type] = 0;
    }
    dataTypes[type]++;
}

console.dir(dataTypes);