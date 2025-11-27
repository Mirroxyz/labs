'use strict';

function unique(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
