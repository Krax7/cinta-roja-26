const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const apiKey = '2Km8nGqQeP8JTbC2POrEPvLIX3QmTA0C8jHlZ6I0'

const peticionNasa = function (startDate, endDate) {
    const URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&api_key=' + apiKey;
    request.get(URL, (err, response, body) => { // Recibe una URL y un callback
        //console.log(err);
        console.log(response.statusCode); // response en su mayoría son las cabeceras (headers).
                                          // statusCode es la clave para el código HTTP devuelto por la petición
        const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
        let keys = Object.keys(json.near_earth_objects); // Devuelve todas las keys presentes el objeto, aunque sea un objeto de objetos
        keys.forEach(function(element) {
            json.near_earth_objects[element].forEach((elem) => {
                if(elem.is_potentially_hazardous_asteroid) { // Estamos obteniendo todos los asteroides potencialmente peligrosos
                    console.log(elem.name)
                }
            })
        })
        
        //console.log(json); // Accediendo al atributo name del JSON
        //console.log('Ya terminó de ejecutar la petición GET');
    });
}

peticionNasa('2017-01-03','2017-01-10');