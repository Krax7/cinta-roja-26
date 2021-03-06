const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

function createAuthor(nombre,apellido,nacionalidad,biografia,genero,edad){
    const URI = 'authors/'
    const URL = URL_BASE + URI

    const jsonSend = {
        name:nombre,
        last_name:apellido,
        nacionalidad:nacionalidad,
        biography:biografia,
        gender:genero,
        age:edad
    }

    return new Promise((resolve,reject)=>{
        request.post({url:URL,form:jsonSend},(err,response,body) => {
            if (response.statusCode === 201){
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject(response.statusCode);
            }
        });
    });
}

createAuthor('Herman','Hesse','MX','Escribió el Lobo Estepario','M',52)
    .then(author => console.log(author.id))
    .catch(err => console.log(err));