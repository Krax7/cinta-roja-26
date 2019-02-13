const mongooose = require('mongoose');
//URL del cluster
const URL_MONGO = "mongodb://prueba:pruebita123@ds259079.mlab.com:59079/cinta-roja";

//Inicia la conexión con el cluster
mongooose.connect(URL_MONGO, { useNewUrlParser }, (err) => {
    if(!err) {
        console.log('Conexión exitosa.');
    }
});

//Hace uso de la clase de mongoose para crear esquemas
const Schema = mongooose.Schema;

const peliculasSchema = new Schema({
    titulo: {
        type: String
    },
    directores: {
        type:[{
            name: String,
            edad: {
                type: Number,
                default: 21
            },
            nacionalidad: {
                type: String,
                enum: ['Mexicana', 'Estadounidense', 'Alemán'],
                require: true //Campo para indicar que el dato es requerido en cada documento
            }
        }]
    },
    duracion: Number,
    url_portada: [String]
});

const  Pelicula = mongooose.model('Pelicula', peliculasSchema);