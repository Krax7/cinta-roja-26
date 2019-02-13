// Mongoose me va a permitir evitar typos en el nombre de las claves.
// Mongoose es un ODM, permite la comunicación entre la base de Mongo y JS.
const mongoose = require('mongoose');
const URL = 'mongodb://omar:Om4rD4t47!@ds015995.mlab.com:15995/cintaroja26';

mongoose.connect(URL, {useNewUrlParser:true}, (err) => {
    if(!err) console.log('Exitoso');
});

// Schema es una librería que me ayuda a mantener la relación con Mongo, pero no es Mongo
const Schema = mongoose.Schema;
const peliSchema = new Schema({ //Un esquema es básicamente una plantilla para un documento
    titulo: String,
    anio: String,
    sinopsis: String,
    duracion: {
        type: Number,
        default: 90 // Valor por defecto.
    },
    portadas_url: {
        type: [String]
    },
    genero: {
        type: String,
        enum: ['COMEDIA', 'DRAMA', 'TERROR'],
        required: true // Se requiere que se especifique el valor de este campo en cada documento.
    },
    directores: {
        type: [{
            nombre: String,
            edad: {
                type: Number,
                default: 18
            }
        }]
    }
},{ timestamps: true });

const Pelicula = mongoose.model('Pelicula', peliSchema);

module.exports = {Pelicula};