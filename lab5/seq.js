'use strict';

function seq(fn) {
  const fns = [fn];

  const chFunc = next => {
    if (typeof next === "function") {
      fns.push(next);
      return chFunc;
    }
    return fns.reduceRight((acc, f) => f(acc), next);
  };

  return chFunc;
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
