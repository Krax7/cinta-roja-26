const { Electrodomestico } = require('./Electrodomestico');
class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad) {
        super(precio, color, capacidad)
    }
}

var lavadora1 = new Lavadora(15000, 'roja', 25)
var lavadora2 = new Lavadora(25000, 'azul', 30)
console.log('La primera lavadora cuesta ' + lavadora1.precio + ' es de color ' + lavadora1.color + ' y su capacidad es de ' + lavadora1.capacidad + ' kilogramos.');
console.log('La segunda lavadora cuesta ' + lavadora2.precio + ' es de color ' + lavadora2.color + ' y su capacidad es de ' + lavadora2.capacidad + ' kilogramos.');