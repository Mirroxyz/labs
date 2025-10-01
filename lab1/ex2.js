'use strict';

function inc(obj) {
    obj.n = obj.n + 1;
}

const a = { n: 10 };

inc(a);

console.dir(a);