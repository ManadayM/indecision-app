const square = function(x) {
    return x * x;
};

console.log(square(8));

// always anonymous
// const squareArrow = (x) => {
//     return x * x;
// };

// concise version
const squareArrow = (x) => x * x;
console.log(squareArrow(9));

// assignment

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Manaday Mavani'));