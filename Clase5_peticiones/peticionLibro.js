const request = require('request'); // Biblioteca JS para realizar peticiones HTTP
const URL = 'http://openlibrary.org/search.json?q='

const buscarLibro = function (book) {
    request.get(URL + book, (err, response, body) => { // Recibe una URL y un callback
        if(response.statusCode === 200) {
            console.log('Operación exitosa.'); // response en su mayoría son las cabeceras (headers).
                                                // statusCode es la clave para el código HTTP devuelto por la petición
        }
        const json = JSON.parse(body); // body siempre lo imprime como String. JSON.parse(body) permite pasarlo a JSON
        console.log('Resultados: ' + json.num_found);
        // Título del libro
        console.log('Título: ' + json.docs[0].title_suggest);
        // Extrayendo los autores del primero libro
        for(let i = 0; i < json.docs[0].author_name.length; i++){
            console.log('Autor ' + i + ': ' + json.docs[0].author_name[i]);
        }
    });
}

buscarLibro('sherlock+holmes'); // i+robot