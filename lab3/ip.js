'use strict';

function transformIP(ip) {
    const array = ip.split('.').map(Number);
    const result = array.reduce((acc, elem, idx) => {
        return acc + elem * 2 ** (8 * (3 - idx));
    }, 0);
    return result | 0;
}

console.log(transformIP('127.0.0.1'));