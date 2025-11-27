'use strict';

const scientists = {
  galileo: { born: 1564, died: 1642 },
  newton: { born: 1643, died: 1727 },
  darwin: { born: 1809, died: 1882 },
  curie: { born: 1867, died: 1934 },
  hawking: { born: 1942, died: 2018 },
};

function ages(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = obj[key].died - obj[key].born;
    }
    return result;
}

console.log(ages(scientists));