'use strict';

function difference(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }
    return result;
}

// Example usage:
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);

const array1_2 = ['Beijing', 'Kiev'];
const array2_2 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array1_2, array2_2);
console.log(result2);