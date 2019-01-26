// Superclase
class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia
        this.calificaciones = calificaciones
    }

    calcularPromedio(calificaciones) {
        let total = 0 // Importante indicar el tipo numérico inicializando en cero
        this.calificaciones = calificaciones
        this.calificaciones.forEach(element => {
            total += element
        });
        return total / this.calificaciones.length
    }

}

module.exports = {
    Maestro
}