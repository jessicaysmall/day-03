const myVariable = "hello";
const myvariable = 'two different';

console.log('abc');

// a condition and you can do an inline if statement parenethesis is true
(1 + 2 === 3 && 'a' === 'b') ? console.log('yes') : console.log('no');

'my string'; // string
1; //number
true; // boolean

let score = 7;
//score += 10; //110
score -= 2; //100
//score *= 10; //1000
//score /= 10; //100
//score %= 10; //0
console.log(score);

const myString ='Hello World';

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLocaleLowerCase());
console.log(myString.substring(0, 5));
console.log(myString.substring(6, 11));
console.log(myString.concat(' ', 'is', ' awesome!'));
console.log(myString.includes('World'));
//alert(myString);
//const userName = prompt('what is your name?');
//const thisName = confirm('is this your username?');

console.log(Math.random());//random number between 0 and 1
console.log(Math.random() * 10);//random between 0 and 10 but never 0 or 10
console.log(Math.floor(7.9487364489621));// 7
console.log(Math.ceil(7.9487364489621));// 8
console.log(Math.max(1,2,3,4));
console.log(Math.min(5,6,89,2,1,4));

//date
const myDate = new Date();

console.log(myDate);
myDate.setMonth(myDate.getMonth() + 3)
console.log(myDate);
2+29
// day 04
//if (condition){do something (code block)}
let age = prompt('what is your age?');
if (age == 30){ // if to compare needs == not =
    console.log(' your age is 30');
} else {
    console.log(`your age is ${age}, ` + age + "!");
}

if (age < 18){
console.log('you are a minor');
} else if (age >= 18 && age < 21){
    console.log('you are adult but can\'t drink, haha!');
} else if (age >= 21 && age <55){
    console.log(' youare adult but not senior citizen');
} else {
    console.log('you\'re old!');
}

const grade = prompt('A B C D or F');

switch (grade){
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
            console.log('you got an D');
            break;
    case 'F':
                console.log('you failed');
                break;
}

