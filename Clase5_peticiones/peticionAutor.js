const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const URL = 'http://openlibrary.org/search.json?author='

const buscarLibro = function (author) {
    request.get(URL + author, (err, response, body) => { // Recibe una URL y un callback
        if(response.statusCode === 200) {
            console.log('Operación exitosa.'); // response en su mayoría son las cabeceras (headers).
                                                // statusCode es la clave para el código HTTP devuelto por la petición
        }
        const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
        console.log('Resultados: ' + json.num_found);
        // Extrayendo los autores del primero libro
        for(let i = 0; i < json.docs.length; i++){
            // Título del libro
            console.log('Título: ' + json.docs[i].title_suggest);
        }
    });
}

buscarLibro('asimov'); // i+robot