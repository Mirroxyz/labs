'use strict';

function array() {
    const array = [];
    function getIndex(index) {
        return array[index];
    }
    getIndex.push = function(data) {
        return array.push(data);
    }
    getIndex.pop = function() {
        return array.pop();
    }
    return getIndex;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 