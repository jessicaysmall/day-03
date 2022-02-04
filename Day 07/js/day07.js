const animalType = 'dog';
const count = 5;

function getFact(animalType, count){
    const myUrl = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${count}`;
    return fetch(myUrl).then(res => res.json());
}

/*getFact(animalType, count).then (data=> {
    console.log(data);
    const randomNUmber = Math.floor(Math.random() * data.length);
    (data.length > 0) ? console.log(data[randomNUmber].text) : console.log('no facts');
});*/


//sort

/*getFact(animalType, count).then(data => {
    const myArray = data.filter((item) => {
        return item.text.includes('dogs');
    })
    myArray.forEach( item => console.log(item.text.length, item.text));//sort by number then filters
})*/

['a', 'b', 'c', 'd', 'e'].forEach( item => console.log(item));

for(let i = 0; i < 100; i++){// for i needs to be 0 otherwise infinite loop
    console.log(i);
}

let x = 0;

while(x <= 10){
    console.log('x', x);
    x += 1;
}

do { //needs 1 or has infinite loop
    console.log('x do', x);
    x++;
} while (x <= 20);