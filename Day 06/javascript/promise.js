const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('failed');
     }, 10000);
});

myPromise
.then((data =>{console.log('good', data)}))
.catch(err => console.log('bad', err));

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
.then(data => console.log(data))
.then(data => console.log('is this done'))
.catch(err => console.log('error', err));
   

/* parse in console
JSON.parse('{"name": "jess"}')
{name: 'jess'}name: "jess"[[Prototype]]: Object
JSON.stringify('{"name": "jess"}')
'"{\\"name\\": \\"jess\\"}"'
*/