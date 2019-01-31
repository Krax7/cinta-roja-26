//DELETE:
const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function deleteAuthor(id){
 const uri = URL_BASE + 'authors/' + id + '/';
 return new Promise((resolve, reject)=>{
   request.delete(uri, (error, response, body)=>{
     console.log(error, response.statusMessage, body);
     if (response.statusCode == 204 || response.statusMessage == 'success') {
       resolve('Autor eliminado');
     }else{
       reject('Ocurrió un error')
     }
   });
 })
}

//Ingresar el ID del autor que creaste
deleteAuthor(1893)
 .then(respuesta => console.log(respuesta) )
 .catch(error => console.log(error) );