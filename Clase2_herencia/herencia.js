// Clase padre o superclase
class Animal {

    constructor(nombre) {
        this.cerebro = true;
        this.patas = 0;
        this.nombre = nombre;
        console.log("Se creó una instancia de Animal");
    }

}

// Clase hijo o subclase
class Perro extends Animal {

    constructor(nombre, noPatas, raza) {
        super(nombre);
        this.patas = noPatas,
        this.raza = raza
        console.log("Se creó una instancia de Perro");
    }

}

// Clase hijo o subclase
class Gato extends Animal {

    constructor(nombre, nivelTernura, nivelMaldad) {
        super(nombre);
        this.nivelTernura = nivelTernura,
        this.nivelMaldad = nivelMaldad
        console.log("Se creó una instancia de Gato");
    }

}

const ayudanteSanta = new Perro('Ayudante de Santa', 4, 'galgo');
console.log(ayudanteSanta);
const misifus = new Gato('Misifus', 10, 11);
console.log(misifus);