
class Person {

    constructor(name = 'Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.major){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

const me = new Student('Manaday Mavani', 30, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

// assignment
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

const traveler1 = new Traveler('Manaday Mavani', 31, 'Vadodara');
console.log(traveler1.getGreeting());

const traveler2 = new Traveler();
console.log(traveler2.getGreeting());