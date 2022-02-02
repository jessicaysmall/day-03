function first(){
    console.log('first');
}

function secongd(){
    console.log('second funky');
}
//functions need to called to work, evem if you have a console lo on it
secongd();
first();
secongd();
/*
function somFrunction(callback,name, age){// these are parameters in parenthesis
    console.log(callback, name, age);
}

somFrunction(true, 'john', 56); //when calling function use the true values for paramenter in function parenthesis
*/
function somFrunction(callitback){// these are parameters in parenthesis
    console.log(callitback);
    callitback();
}

somFrunction(secongd); //when calling function use the true values for paramenter in function parenthesis

function doWork(num, someString, othernUmber){
    console.log(someString);
    console.log(num + 2);
    console.log(8> othernUmber);
}

doWork(5, "haha", 5);

/*function doMOre(somFrunction){
    somFrunction();
}

doMOre(7);*/
// xmlhttprequest
const myXMLhttpreq = new XMLHttpRequest();
console.log(myXMLhttpreq);
myXMLhttpreq.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
myXMLhttpreq.send();
myXMLhttpreq.onreadystatechange = function (){
    if (myXMLhttpreq.readyState === 4){
        console.log(myXMLhttpreq.responseText);
    }
}

secongd();

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
.then(data => console.log(data))
.then(data => console.log('is this done'))
.catch(err)
   

//https://swapi.dev/api/people