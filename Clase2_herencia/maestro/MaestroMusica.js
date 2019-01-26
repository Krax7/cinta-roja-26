const { Maestro } = require('./Maestro')
class MaestroMusica extends Maestro {
    constructor(edad) {
        super('Música',[])
        this.edad = edad
    }
}

module.exports = {
    MaestroMusica
}