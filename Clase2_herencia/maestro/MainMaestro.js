const { MaestroMusica } = require('./MaestroMusica');
const { MaestroFisica } = require('./MaestroFisica');

// Calificaciones
grupoMusica = [10, 9, 5, 9, 6, 7]
grupoFisica = [5, 5, 5, 6, 5, 10]

// Crear una instancia de MaestroMusica
maestroMusica = new MaestroMusica(40)
console.log(maestroMusica);
//Calcular promedio del grupo del maestroMusica
console.log('Promedio del grupo de música: ' + maestroMusica.calcularPromedio(grupoMusica))

// Crear una instancia de MaestroFisica
maestroFisica = new MaestroFisica(15)
console.log(maestroFisica);
// Calcular promedio del grupo del maestroFisica
console.log('Promedio del grupo de física: ' + maestroFisica.calcularPromedio(grupoFisica))
