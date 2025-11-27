'use strict';

function removeElements(arr, ...items) {
    items.forEach(function(item) {
        const index = arr.indexOf(item);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    });
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);