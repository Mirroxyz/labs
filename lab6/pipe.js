'use strict';

function pipe(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') throw new TypeError('all arguments must be functions');
    }
    return function (x) {
        return fns.reduce(function (acc, fn) {
            return fn(acc);
        }, x);
    };
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

try {
    pipe(inc, 7, cube);
} catch (err) {
    console.error('pipe validation error:', err.message);
}