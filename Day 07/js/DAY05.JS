//FUNCTIONS

//FUNCTIOND ECLARATION

//KEYWORD FUNCTION
//FUNCTION NAME
//(PARAMENTERS)
//{CODE BLOCK}

function add(a,b){ // parameters are placeholder for values when to call the function
    return a + b;
}

console.log(add(21, 21)); //substitute paramenter placeholders with value as you call function
//methods
//are just functions that are paer of an object (in javascript evrything is an objecyt)
// strings are objects

'Hello World'.toUpperCase();
['hello', 'world'].join(' ');
console.log('console.log is a method');

//scope
//global scope
//local scope
//local ccope is only abvalale inside a funcion
//global scioe is available eveywhere

const scope = {
    myScopedVaibale: 'Goodbye',
    global: {
        name: 'global scope',
        add(a){
            return a + this.subtract.myPribate;
        },
        subtract(){
            const myPribate = 'goodbye';
            return a - b ;
        },
        localScope : {
            name: 'local scope',
            whoAMI(){
                console.log(this)
            }
        }
    },
};

const myGlobalVariable = 'hello';
console.log(scope.global.localScope.whoAMI());

const myButton = document.querySelector('button');
myButton.addEventListener('click', function(){
    console.log(this);
    this.innerHTML = scope.myScopedVaibale;
})