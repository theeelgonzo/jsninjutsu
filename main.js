const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a ' : 'no '} driver's license.`);
    }
};

//console.log(jonas.calcAge());
//console.log(jonas.age);

//Challenge
//"Jonas is a 46 year old teacher, and he has a driver's license."
/*jonas.getSummary();

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 144,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(mark.bmi > john.bmi ? `Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})` : `John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})`);*/
/* console.log('Lifting weights repetition 1')
console.log('Lifting weights repetition 2')
console.log('Lifting weights repetition 3')
console.log('Lifting weights repetition 4')
console.log('Lifting weights repetition 5')
console.log('Lifting weights repetition 6')
console.log('Lifting weights repetition 7')
console.log('Lifting weights repetition 8')
console.log('Lifting weights repetition 9')
console.log('Lifting weights repetition 10') */

//for loop keeps running while condition is TRUE
/* for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i]);
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = []; */

/* for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
} */

//console.log(ages);

//loop backwards

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = jonasArray.length - 1; i >=  0; i--){
    console.log(jonasArray[i]);
}

