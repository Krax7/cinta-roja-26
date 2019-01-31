const request = require('request');
const URL_BASE = `https://swapi.co/api/`;
function getPeopelByID(id){
 const uri = URL_BASE + 'people/' + id;

 return new Promise((resolve, reject)=>{
   request.get(uri, (err, response, body)=>{
     const json = JSON.parse(body);
     if(response.statusCode == 200){
       resolve(json);
     }else{
       reject('Hubo un error');
     }
   })
 })
}

function getMovieByURL(url){
 const promesa = new Promise((resolve,reject)=> {
   request.get(url, (err, response, body) => {
     const json = JSON.parse(body);
     if (response.statusCode == 200) {
       resolve(json);
     } else {
       reject('Hubo un error', err);
     }
   });
 });
 return promesa;
}

getPeopelByID(1)
 .then(respuesta => {
   console.log(respuesta.films[0]);
   return getMovieByURL(respuesta.films[0])
 }).then(respuesta2 =>{console.log('Movie', respuesta2.title);})
 .catch(err=>{console.log(err)});