// arguments object - no longer bound with arrow functions

const add = function (a, b){
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 100));

const addArrow = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(addArrow(55, 1, 100));

// this keyword - no longer bound

const user = {
    name: 'Manaday',
    cities: ['Rajkot', 'Vadodara'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// challenge

const multiplier = {
    numbers: [1, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());