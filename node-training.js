
class Calculator {
    
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        return x / y;
    }

}

let calc = new Calculator;
console.log('2 + 3 = ' + calc.add(2, 3));
console.log('3 - 2 = ' + calc.subtract(3, 2));
console.log('4 * 5 = ' + calc.multiply(4, 5));
console.log('10 / 3 = ' + calc.divide(10, 3));


function printHash() {

    for (let i = 0; i < 7; i++) {
        let hash = '';
        for (let j = 0; j < i; j++) {
            hash += '#';
        }
        console.log(hash);
    }
}

printHash();

function isEvenOrOdd(n) {
    if (n % 2 == 0)
        return 'even';
    return 'odd';
}

console.log(isEvenOrOdd(3));

class Person {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    whoIsOlder(person){
        if (this.age > person.age) {
            return this.name;
        }
        return person.name;
    }
}

let me = new Person('kid', 10);
let you = new Person('adult', 30);

console.log(me.whoIsOlder(you));

function testScore(n) {

    if (n >= 80 && n <= 100) {
        return 'A';
    }
    else if (n >= 70 && n <= 89) {
        return 'B';
    }
    else if (n >= 60 && n <= 69) {
        return 'C';
    }
    else if (n >= 50 && n <= 59) {
        return 'D';
    }
    else if (n <= 49 && n >= 0) {
        return 'F';
    }
    else 
        return 'undefined';
}

console.log('Test score is 95: ' + testScore(95));

function whatSeason(month) {
    
    switch(month) {
        case 'September':
        case 'October':
        case 'November':
            return 'Autumn';
        case 'December':
        case 'January':
        case 'February':
            return 'Winter';
        case 'March':
        case 'April':
        case 'May':
            return 'Spring';
        case 'June':
        case 'July': 
        case 'August':
            return 'Summer';
    }
}

console.log("What season is September: " + whatSeason('September'));


function canDrive(n) {
    if (n >= 18) {
        return 'You are old enough to drive';
    }
    return 'You can drive in ' + (18 - n) + ' years';
}

console.log('Can I drive if I am 16: ' + canDrive(16));


for (let i = 0; i < 11; i++) {
    console.log(i + ' x ' + i + ' = ' + (i*i) );
}

var users = ["user_a","user_b","user_c","user_d"];
console.log(users);
users = users.map(function(x){ return x.toUpperCase(); })
console.log(users);


const student = {
    name: "Anil",
    age: 18,
    address: {
        city : "NewYork"
    }
}

let newStudent = student;
console.log('Student: ' + student.address.city);
newStudent.address.city = "Dombivali";
console.log('New Student: ' + newStudent.address.city);


const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina"
]

countryList.forEach(element => {
    console.log(element)
});


function doesKeyExist(key) {
    const person = {
        id: 1,
        name: 'John',
        age: 23
    }

    console.log(key in person);
}

doesKeyExist('age');
doesKeyExist('address');

function checkSign(n) {
    if (n < 0){
        return 'negative';
    }
    else if (n > 0) {
        return 'positive';
    }
    else {
        return 'zero';
    }

}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));


const userObj = {
    firstName: 'Grant',
    lastName: 'Fricano',
    age: 100
}

userObj["city"] = 'DC';

console.log(userObj)


function getFileExtension(filename) {
    let fileArray = filename.split('.');
    return fileArray[1];
}

console.log(getFileExtension('myfile.pdf'));
console.log(getFileExtension('myfile.doc'));

function sayHello(){ 
    setTimeout(() => {
        console.log("Hello");
      }, 5000)
}

function helloWorld() {
    console.log('hello world');
}
//sayHello();
//setInterval(sayHello, 5000);