// Clase padre o superclase
class Animal {

    constructor(nombre) {
        this.cerebro = true;
        this.patas = 0;
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre
    }

}

module.exports = {
    Animal
}