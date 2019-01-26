// Crear una función que reciba como 
// argumentos dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números o la
// multiplicación de los dos números.

function operaciones(n1, n2, operacion) {
    console.log(operacion(n1,n2))
} // Nota: 'operacion' es el callback

function suma(n1, n2) {
    return n1 + n2
}

function resta(n1, n2) {
    return n1 - n2
}

function multiplicacion(n1, n2) {
    return n1 * n2
}

operaciones(2,3,suma)
operaciones(3,4,resta)
operaciones(5,6,multiplicacion)

// Escribe una funcion que reciba una cadena de
// caracteres y debe devolver, mediante un callback, la
// cadena de caracteres en mayusculas o en minusculas.
//      ordenSuperior("PejeLagarto", minus);
//      -> pejelagarto
//      ordenSuperior("PejeLagarto", mayus);
//      -> PEJELAGARTO

// ordenSuperior hace referencia a una función de orden superior, la cual se define como
// una función que recibe a otra función como parámetro, o que retorna una función como
// resultado.

function ordenSuperior(cadena, procesarCadena) {
    console.log(procesarCadena(cadena))
} // Nota: 'procesarCadena' es el callback

function mayus(cadena) {
    return cadena.toUpperCase()
}

function minus(cadena) {
    return cadena.toLowerCase()
}

ordenSuperior('PejeLagarto', mayus)
ordenSuperior('PejeLagarto', minus)

// Hacer un arreglo de 4 cantidades de tiempo en minutos
// EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
// mayores a dos horas (hacer la comparación en horas) 
// mediante un callback

function compararHoras(horas, mayorDosHoras) {
    console.log(mayorDosHoras(horas))
}

function mayorDosHoras(horas) {
    let array = []
    for(let x = 0; x < horas.length; x++) {
        if((horas[x]/60) >= 2) {
            array.push(horas[x]);
        }
    }
    return array;
}

compararHoras([500, 60, 300, 120], mayorDosHoras)