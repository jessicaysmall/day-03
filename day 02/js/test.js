// how to look for an element in the DOM page

const button = document.querySelector('button');
const input = document.querySelector('input');
const body = document.querySelector('body');


let howManyClicks = 0; //variable to create number of click
button.addEventListener('click', function() { // add interaction (event listener)
    howManyClicks += 1; //add clicks to button
    button.innerText = howManyClicks; //change text of button to howmanylicks
    button.style.color = input.value;//makes the button the color of input
    input.style.color = 'black';
    body.style.backgroundColor = 'red';
    input.style.backgroundColor = 'blue';
    
})

console.log(button); // puts button on page


// forget about var, we use let and const, conts cannot change, let can change.




