const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Pelicula } = require('./pelicula');

app.use(bodyParser.urlencoded( {extended: true} ))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Pelicula.find().exec()
    .then((peliculas) => {
        res.send(peliculas)
    }).catch((err) => {
        res.status(400).send(err)
    });
});

// Crear Película
// Mongoose validará el formato del objeto enviado
app.post('/create/pelicula', (req,res) => {
    const { titulo, anio, sinopsis, duracion,
        portadas_url, genero, directores } = req.body
    const newPelicula = Pelicula({
        titulo,
        anio,
        sinopsis,
        duracion,
        portadas_url,
        genero,
        directores
    });

    newPelicula.save((err, pelicula) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send()
    });

    res.status(201).send(newPelicula);
});

app.listen(3000, () => {
    console.log('Server on');
});