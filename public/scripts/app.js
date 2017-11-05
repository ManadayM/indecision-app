'use strict';

var square = function square(x) {
    return x * x;
};

console.log(square(8));

// always anonymous
// const squareArrow = (x) => {
//     return x * x;
// };

// concise version
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(9));

// assignment

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Manaday Mavani'));
