const { Animal } = require('./Animal');
// Clase hijo o subclase
class Gato extends Animal {

    constructor(nombre, nivelTernura, nivelMaldad) {
        super(nombre);
        this.nivelTernura = nivelTernura,
        this.nivelMaldad = nivelMaldad
    }

    maullar() {
        return "Miauuu"
    }

}

module.exports = {
    Gato
}