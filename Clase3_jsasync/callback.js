// let elCallback = () => {
//     console.log('Hola mundo desde un callback');
// }

// function hacerConsoleLog(callback) {
//     callback()
// }

// hacerConsoleLog(elCallback);

//Definición del callback
// function imprimiMensaje(callback) {
//     callback();
// }

// let callbackNoChido = () => {
//     console.log('Mensaje No Chido');
// }

// let callbackChido = () => {
//     console.log('Mensaje chido');
// }

// imprimiMensaje(callbackNoChido);
// imprimiMensaje(callbackChido);

// Forma de llamar a un callback cuando termine de ejecutarse una función

function imprimiMensaje(mensaje, elCallback) {
    elCallback(mensaje);
}

imprimiMensaje('Este es un mensaje.', (unMensaje) => {
    console.log(unMensaje);
    console.log('Se ejecutó el callback.');
})