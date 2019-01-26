const { Perro } = require('./Perro');
const { Gato } = require('./Gato');

const ayudanteSanta = new Perro('Ayudante de Santa', 4, 'galgo');
console.log(ayudanteSanta.getNombre());
const misifus = new Gato('Misifus', 10, 11);
console.log(misifus.getNombre());