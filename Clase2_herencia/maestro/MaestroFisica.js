const { Maestro } = require('./Maestro');
class MaestroFisica extends Maestro {
    constructor(antiguedad) {
        super('Física',[])
        this.antiguedad = antiguedad
    }
}

module.exports = {
    MaestroFisica
}