const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const URL = 'https://pokeapi.co/api/v2/pokemon/psyduck'
request.get(URL, (err, response, body) => { // Recibe una URL y un callback
    console.log(err);
    console.log(response.statusCode); // response en su mayoría son las cabeceras (headers).
                                      // statusCode es la clave para el código HTTP devuelto por la petición
    const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
    console.log(json.abilities); // Accediendo al catálogo de habilidades del pokémon
    for(let i = 0; i < json.abilities.length; i++) {
        console.log(json.abilities[i].ability.name);
    }
    console.log('Ya terminó de ejecutar la petición GET');
});
