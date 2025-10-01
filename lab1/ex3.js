'use strict';

const array = [12, -150, true, true, 1n, 'hello', '', Symbol('u'), false, () => {}, 42, { a: 1 }, undefined, Infinity, function() {}, void 0, NaN, Symbol('sym'), 9007199254740991n, new Date(), null];

const dataTypes = {
    'boolean': 0,
    'string': 0,
    'number': 0,
    'object': 0,
    'undefined': 0,
    'function': 0,
    'symbol': 0,
    'bigint': 0
}

for(const item of array) {
    const type = typeof item;
    dataTypes[type]++;
}

console.dir(dataTypes);