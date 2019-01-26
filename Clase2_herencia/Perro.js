const { Animal } = require('./Animal')
// Clase hijo o subclase
class Perro extends Animal {

    constructor(nombre, noPatas, raza) {
        super(nombre);
        this.patas = noPatas,
        this.raza = raza
    }

    ladrar() {
        return "Wauuu";
    }

}

module.exports = {
    Perro
}