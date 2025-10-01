'use strict';

function fn() {
    const obj1 = { name: 'Rick' };
    let obj2 = { name: 'Rick' };

    obj1.name = 'Morty';
    obj2.name = 'Morty';

    //obj1 = { name: 'Summer' };
    obj2 = { name: 'Summer' };
}

function createUser(name, city) {
    return { name, city };
}

console.log(createUser('Marcus Aurelius', 'Roma'));