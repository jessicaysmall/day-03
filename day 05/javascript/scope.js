//what is scope
//scope is the area in whhich a vvairbal is accessible
//kinds if scope
//global scope
//funciton scioe
// block scope
//local scope

/// scope analogu
//global scope

// giving parents
// stinging kids

const publie = 'anhone can sse this';
let car = 'pribate transportaion';

function greatGrandfather(){
    let car = 'toyota';
    console.log(car);

    function farher(){
        let car = 'bmw';
        console.log(car);

        function child(){
            let car = 'ford';
            console.log(car);        
        }

        function sibli(){
            let car = 'chevy';
            console.log(car);
        }

        child();
        sibli();
    }
    farher();
    function uncle(){
        let car = 'jeep';
        console.log(car);
     }

     uncle();
}

greatGrandfather();

function greatUncle(){
        let car = 'dodge';
        console.log(car);
}
        function secondcousing(){
            let car = '2 cous chive';
            console.log(car);
        }
    
    greatUncle();
    secondcousing();
