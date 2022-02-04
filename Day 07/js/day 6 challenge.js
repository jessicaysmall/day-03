const baseURL = 'https://cat-fact.herokuapp.com';
const endPoint = {
    facts: '/facts/random',
    users: '/users',
}

/*fetch(baseURL + endPoint.facts)
.then(function(response){
    return response.json();
}).then( (data) => {
    console.log('cat fact', data);
    const randomNUmber = Math.floor(Math.random() * data.length);
    console.log('random fact', data[randomNUmber].text, randomNUmber);
    //alert(data[randomNUmber].text, randomNUmber);
})*/

function getFact(animal, count){
    fetch(baseURL + endPoint.facts + "?animal_type=" + animal + "&amount=" + count)
.then(function(response){
    return response.json();
}).then( (data) => {
    console.log('cat fact', data);
    const randomNUmber = Math.floor(Math.random() * data.length);
    (data.length >0) ? console.log(data[randomNUmber].text) : console.log('no facts');
    //alert(data[randomNUmber].text, randomNUmber);
})

}

const animal = prompt('wahay animal do you want?');
const count =  prompt('how many facts do you want');
getFact(animal, count);