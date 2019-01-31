const request = require('request');

function getPeopleSWById(idPeople){
  return new Promise((resolve,reject) => {
    const URL = `https://swapi.co/api/people/${idPeople}/`
    request.get(URL,(err,response,body) => {
      if(response.statusCode === 200){
        const json = JSON.parse(body)
        resolve(json)
      }else{
        reject('Error en la primera petición')
      }
    });
  })
}

function getMovieByURL(url){
  return new Promise((resolve,reject) => {
    request.get(url,(err,response,body2) => {
      const json2 = JSON.parse(body2) 
      response.statusCode === 200
        ? resolve(json2.title)
        : reject('Error en la segunda petición')
    });
  })
}

getPeopleSWById(50)
  .then((personaje) => getMovieByURL(personaje.films[0]))   // Este then se ejecuta primero, y su resultado 
                                                            // se utiliza para ejecutar la segunda promesa.
  .then((peli) => console.log(peli)) // El resultado de la segunda promesa es manejado por este then
  .catch(err =>console.log(err))    // Un solo catch es suficiente para manejar los errores que provengan
                                    // de cualquier promesa.