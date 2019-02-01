// Genera un nuevo arreglo en el que solo se encuentren
// los conejos del arreglo original.

const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];

const conejos = animalitos.filter(animalito => animalito.especie === 'conejo');

console.log(conejos);

// Genera un nuevo arreglo que contenga los nombres de todas 
// las mascotas.

// Método 1
const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];

const nombresForEach = [];
mascotas.forEach((element) => {
    nombresForEach.push(element.nombre)
});

console.log('nombresForEach', nombresForEach);

// Método 2
// Lo bueno de hacerlo con map es que hace un "push automático" a nombresMap, ya no hay
// que realizarlo manualmente.
const nombresMap = mascotas.map((element, index, array) => {
    console.log(index); // Imprime el índice del elemento donde se encuentra
    console.log(array); // Imprime el arreglo array.length veces
    return element.nombre;
});

console.log('nombresMap', nombresMap);