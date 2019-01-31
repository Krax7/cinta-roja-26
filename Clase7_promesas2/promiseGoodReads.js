const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

// Crear a un autor
function createAuthor(nombre,apellido,nacionalidad,biografia,genero,edad){
    const URI = 'authors/'
    const URL = URL_BASE + URI

    // JSON con los datos a mandar en el POST
    const jsonSend = {
        name:nombre,
        last_name:apellido,
        nacionalidad:nacionalidad,
        biography:biografia,
        gender:genero,
        age:edad
    }

    // Promesa. Las clave-valor 'url' y 'form', son necesarias.
    // Las promesas reciben siempre un callback.
    return new Promise((resolve,reject)=>{
        request.post({url:URL,form:jsonSend},(err,response,body) => {
            if (response.statusCode === 201){ // 201 para POST
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject(response.statusCode);
            }
        });
    });
}

// Obtener un autor por su ID
function getAuthorByID(id){
    const URI = 'authors/'
    const URL = URL_BASE + URI + id

    // Promesa. Las clave-valor 'url' y 'form', son necesarias.
    return new Promise((resolve,reject)=>{
        request.get(URL, (err, response, body) => {
            if (response.statusCode === 200){ // 200 para GET
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject(response.statusCode, err);
            }
        });
    });
}

// Crear a un autor
function updateAuthorByID(id,nombre,apellido,nacionalidad,biografia,genero,edad){
    const URI = 'authors/'
    const URL = URL_BASE + URI + id + '?format=json'

    // JSON con los datos a mandar en el POST
    const jsonSend = {
        name:nombre
        //last_name:apellido,
        //nacionalidad:nacionalidad,
        //biography:biografia,
        //gender:genero,
        //age:edad
    }

    // Promesa. Las clave-valor 'url' y 'form', son necesarias.
    return new Promise((resolve,reject)=>{
        request.patch({url:URL,form:jsonSend},(err,response,body) => {
            if (response.statusCode === 200){ // 200 para POST y PATCH
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject(response.statusCode);
            }
        });
    });
}

// Nota: al escribir .then(varResolve => function) y .catch (varReject => function), tanto varResolve como 
// varReject son variables "dummies" que solo cachan lo que se le pasó a resolve y a reject dentro de la 
// promesa.

// Se comentó 'createAuthor' para no crear una autor cada que se ejecutara este script.
// createAuthor('Sir Arthur Connan','Doyle','MX','Magnífico escritor. Creador del detective ficticio Sherlock Holmes.','M',100)
//     .then(author => console.log(author.id))
//     .catch(err => console.log(err));

getAuthorByID(1963)
    .then(authorJson => console.log(authorJson))
    .catch(err => console.log(err));

updateAuthorByID(1900,'Gatito')
    .then(updatedAuthor => console.log(updatedAuthor))
    .catch(err => console.log(err));