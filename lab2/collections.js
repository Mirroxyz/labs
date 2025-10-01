'use strict';

const usersPhones = [
    { name: 'Марко', phone: '+380931482675' },
    { name: 'Сергій', phone: '+380671024389' },
    { name: 'Вікторія', phone: '+380501937246' },
    { name: 'Джері', phone: '+380631785402' },
    { name: 'Євгенія', phone: '+380991326857' }
]

function findPhoneByName(name) {
    for(const user of usersPhones) {
        if(user.name === name) {
            return user.phone;
        }
    }
}

const hashUserPhones = {
    'Марко': '+380931482675',
    'Сергій': '+380671024389',
    'Вікторія': '+380501937246',
    'Джері': '+380631785402',
    'Євгенія': '+380991326857'
};

function findPhoneHash(name) {
    return hashUserPhones[name];
}

console.log(findPhoneByName('Сергій'));
console.log(findPhoneHash('Євгенія'));