/*var depth = 60;
for (i=1; i <= depth; i++){
    feet -=i;
}
if (i == depth){
    break;
}
console.log(depth);
*/

// n = day 1

/*let firstName = prompt ('what is your first name');
let lastName = prompt('alast name');
console.log(firstName);
alert(lastName);

let birth = prompt('use birthday');
confirm('is this your birthday ' + birth);
alert('you birthday is ' + birth);*/

/*var x = confirm('Did twin flame bruise paint you blue?')
var y = confirm('Just between us did the love affair maim you too?')
if (x === true && y === true)
{
    alert("You remember it all to well");
}
else if (x === false && y === true)
{
    alert("It maimed me more!");
}
else if (x === true && y === false)
{
    alert("You lie!!!");
}
else {
    alert("Well, I remember it all too VERY well");
}


/*var x = confirm('Did twin flame bruise paint you blue?')
var y = confirm('Just between us did the love affair maim you too?')
var w =  x == true && y == true;
var m = x == true && y == false;
var t = x == false && y == true;
var e =  x == false && y == false;
switch (*/
//.function() this is a function and can attach to variable var.function(); to use default value of function or 
//put inside a function to customize with your var value or string .function(var);
//debugger;

if (Number(bday)){
    console.log('great you entered a number');
} else{
    console.log('please enter a number');
}
//const birthday = new Date(bDay);

//const bday = prompt('what is your birthday');// ask your birthdat
const birthday = new Date(bday); //makes bday a date variable
const month = birthday.getMonth() === new Date().getMonth();// gets birthday var month and compares to today
const day = birthday.getDate() === new Date().getDate();//gets the day of birthday and compares to today
const correctBday = month && day;//checks conditions of month and day in true or false
if (correctBday){//if your birthday is today
    console.log('Happy Birthday');}// if true
    else {//if not
        console.log('Very Unhappy Birthday');//if false
    }



//x == 1 ? console.log(' x is 1') : console.log('x is 2)');