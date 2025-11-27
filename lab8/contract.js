'use strict';

function contract(fn, ...types) {
    return function() {
        const argTypes = types.slice(0, -1);
        const returnType = types[types.length - 1];
        
        if (arguments.length !== argTypes.length) {
            throw new TypeError(`Wrong number of arguments`);
        }
        
        for (let i = 0; i < argTypes.length; i++) {
            if (typeof arguments[i] !== argTypes[i].name.toLowerCase()) {
                throw new TypeError(`Wrong argument type`);
            }
        }
        
        const result = fn.apply(this, arguments);
        
        if (typeof result !== returnType.name.toLowerCase()) {
            throw new TypeError(`Wrong return type`);
        }
        
        return result;
    };
}

const add = function(a, b) { return a + b; };
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.log(res);

const concat = function(s1, s2) { return s1 + s2; };
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2);
