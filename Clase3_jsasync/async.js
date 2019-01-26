// Los siguientes console logs se van a ejecutar de manera ordenada.
// console.log(1);
// console.log(2);
// console.log(3);

let callback = function() {
    console.log(2);
}

// Forma de escribir una función con operador flecha
// let callback = () => {
//     console.log(2);
// }

// El siguiente bloque ejemplici
// Un callback es una función, y se ejecuta cuando termina la ejecución de un thread.
// El callback es una forma del proceso de regresar a la pila después de terminar en la cola.
// console.log(1);
// setTimeout(callback,timeout_ms) -> timeout_out : Tiempo de espera en milisegundos
// setTimeout(callback,3000);

// Se puede colocar el callback en el argumento directamente (en este caso, con operador flecha)
// setTimeout(() => {
//     console.log('Me tardé 5 segundos.');
// }, 5000);
// console.log(3);

// Cuello de botella
// Tomar el cuenta que el callback se ejecuta hasta que la pila está vacía. Antes, no lo ejecutará.
// Hasta que el for termine (aunque se ejecute en paralelo), el callback del setTimeout permanecerá
// en espera.
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 1000);
for(let i = 0; i <= 999999999; i++);
console.log(4);