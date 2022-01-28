

const number1 = prompt('Promt for number 1');
const number2 = prompt('promp for number 2');

const convertNumber1 = parseInt(number1);
const convertNumber2 = parseInt(number2);

if (convertNumber1 > convertNumber2){
    alert(convertNumber1 + ' is greater than ' + convertNumber2);
}
else if (convertNumber1 < convertNumber2){
    alert(convertNumber2 + ' is greater than ' + convertNumber1);
}
else {
    alert(convertNumber1 + ' and ' + convertNumber2 + ' are equal'); //use ${var} when using a variable inside a text string
}