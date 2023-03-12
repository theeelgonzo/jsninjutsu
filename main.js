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

/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = jonasArray.length - 1; i >=  0; i--){
    console.log(jonasArray[i]);
}

//loop in a loop, three exercises, five reps each

for(let exercises =1; exercises <= 3; exercises++){
    console.log(`==============Starting exercise ${exercises}.`)
    for(let reps = 1; reps <= 5; reps++){
        console.log(`Rep ${reps} of exercise ${exercises}!`)
    }
} */


//while loop introduction
/* let rep = 1;
while(rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
} */

//but we don't NEED a counter....just a condition that remains true...

/* let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
let roll = 0;
while(dice !== 6){
    
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    
    roll++;
}
//a little something I came up with to keep track of the total rolls each refresh
console.log(`It took me ${roll} rolls to get a 6!`);
 */

//Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    if(bill >= 50 && bill <= 300){
        return bill * .15;
    } else {
        return bill * .2;
    }
}

for(i=0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(bills[i], tips[i], totals[i]);
}


let sum = 0;
let num = 0;

function calcAvg(arr){
    for(i=0; i < arr.length; i++){
        num = arr[i];
        sum = sum + num;
        //console.log(sum);
    }
    return sum / arr.length;

}

console.log(calcAvg(tips));
console.log(calcAvg(totals));
