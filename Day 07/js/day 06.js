// promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('this is the resolved or result data');
    }, 5000);
});

myPromise
.then((reolvedData) => {
    console.log('good', reolvedData);
}).catch(err => console.log('bad', err));
//api
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((reolvedData) => { console.log(reolvedData); return reolvedData.json();})
.then((jsonData) => {console.log(jsonData)})


//json

const nonJsonObject ={
    name: 'pikachu',
    id: 25,
    image: 'https:/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
};

const jsonObject = `{
    "name": "pikachu",
    "id": 25,
    image: "https:/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
}`