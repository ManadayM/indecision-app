'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 100));

var addArrow = function addArrow(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(addArrow(55, 1, 100));

// this keyword - no longer bound

var user = {
    name: 'Manaday',
    cities: ['Rajkot', 'Vadodara'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// challenge

var multiplier = {
    numbers: [1, 6],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
