'use strict';

function compose(...fns) {
    const errHandlers = [];
  
    function compFunc(x) {
        let result = x;
        for (let i = fns.length - 1; i >= 0; i--) {
            try {
                result = fns[i](result);
            } catch (error) {
                errHandlers.forEach(function(handler) { 
                    handler(error); 
                });
            return undefined;
            }
        }   
    return result;
    }
  
    compFunc.on = function (event, handler) {
        if (event === 'error') {
            errHandlers.push(handler);
        }
    return compFunc;
    };
  
    return compFunc;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(inc, twice, cube);
console.log(f1(5));

const f2 = compose(inc, inc);
console.log(f2(7));

const f3 = compose(inc, function () { throw new Error('test error'); }, cube);
f3.on('error', function (err) {
    console.error('error caught:', err.message);
});
console.log(f3(7));

try {
    compose(inc, 7, cube);
} catch (err) {
    console.error('compose validation error:', err.message);
}