const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const URL = 'http://openlibrary.org/search.json?q='

const peticion = function (book) {
    request.get(URL + book, (err, response, body) => { // Recibe una URL y un callback
        console.log(err);
        console.log(response.statusCode); // response en su mayoría son las cabeceras (headers).
                                          // statusCode es la clave para el código HTTP devuelto por la petición
        const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
        console.log(json); // Accediendo al atributo name del JSON
        console.log('Ya terminó de ejecutar la petición GET');
    });
}

peticion('i+robot');