'use strict';

function iterate(obj, callback) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback(key, obj[key], obj);
        }
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, function(key, value) {
    console.log({ key, value });
});
