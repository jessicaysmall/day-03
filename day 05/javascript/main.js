//wwhat are js functions

getNumber(); //you can call functions declaration even when they are declared!
// function declaration

function getNumber(){// function name
    console.log(1);// function body action
    return 'needs to have a return otherwise is undeclared'; // needs to have a return otherwise is undeclared
}//close

getNumber();//need to call function for it to work!



// getaNumber(); function expression needs to be done before getting called
//function expression
let getaNumber = function(){
    console.log(66);
};
getaNumber();

function getRealNumber(){
    let nNumber = prompt('give me a number');
    let nNumberParse = parseInt(nNumber);
    if (isNaN(nNumberParse)){// isNaN is true
        console.log('you did not gave me a number');
        return getRealNumber();
    } else {
        console.log('you gave me a number');
        return nNumberParse;
    }
}

let actualNumber = getRealNumber();
console.log('the real number you gave me is ' + actualNumber);


//arrow function
let myArroqFunction = (num1, num2) => {
    console.log(num1, num2);
    return num1 + num2;
};
//anomynous function is an arrow functions
['a', 'b', 'c'].forEach((item) => {
    console.log(item);
    return item;
});

//let myNumber = getNumber(7);
//console.log(myNumber);

//functions
//name but not always(anonymous)
// function body
//return value(optional otherwise is undefined)
//parameter (optional) no oarameter or many arguiments
//argument (optional)

function stepIGetBowl(color){
    console.log('step 1: get bowl');
    return color + 'bowl';
}

function step2getCereal(kind){
    console.log('step 2 ; get milk');
    return kind + 'cereal';
}

function step3getMilk(type){
    console.log('step 3: get milk ')
    return type + ' milk';
}

function step4pourCereak(cereal){
    console.log('step 4: por cereal into milk');
    return cereal; 
}

function step5getmilkt(milk){
    console.log('step 5: pour milk into bowl');
    return milk;
}

function step6eatCereal(mood){
    console.log('STEP 6; EAT CERAAL');
    return 'we are ' + mood;
}


function actuallydoAction(){
    let bowl = stepIGetBowl('red');
    let cereal = step2getCereal('forsted flakes');
    let milk = step3getMilk('skim');
    let cerealPoured = step4pourCereak(cereal);
    let milkPoured = step5getmilkt(milk);
    let mood = step6eatCereal('happy');
    console.log(mood);
}

actuallydoAction();



