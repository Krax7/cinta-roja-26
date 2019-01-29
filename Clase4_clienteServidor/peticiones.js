const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const URL = 'http://swapi.co/api/people/7/'
request.get(URL, (err, response, body) => { // Recibe una URL y un callback
    console.log(err);
    console.log(response.statusCode); // response en su mayoría son las cabeceras (headers).
                                      // statusCode es la clave para el código HTTP devuelto por la petición
    const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
    console.log(json.name); // Accediendo al atributo name del JSON
    console.log('Ya terminó de ejecutar la petición GET');
});
