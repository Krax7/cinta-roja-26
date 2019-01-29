const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const apiKey = '2Km8nGqQeP8JTbC2POrEPvLIX3QmTA0C8jHlZ6I0'

const peticionNasa = function (startDate, endDate) {
    const URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&api_key=' + apiKey;
    request.get(URL, (err, response, body) => { // Recibe una URL y un callback
        console.log(err);
        console.log(response.statusCode); // response en su mayoría son las cabeceras (headers).
                                          // statusCode es la clave para el código HTTP devuelto por la petición
        const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
        console.log(json); // Accediendo al atributo name del JSON
        console.log('Ya terminó de ejecutar la petición GET');
    });
}

peticionNasa('2017-01-03','2017-01-10');