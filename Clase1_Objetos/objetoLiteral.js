var x = 0;
const ayudanteSanta = {
    noPatas: 4,
    color: 'cafe',
    raza: 'galgo',
    ladrar: function() {
        console.log('waaaau');
        return "waaaau"; // Sin este return, al llamar a la función en la línea 18, nos daría undefined
                // Aún así saldría el console.log
    },
    correr: function() {
        console.log("Ayudante de Santa está corriendo");
    
    },
    comer: x => x + 1 
}

console.log(ayudanteSanta);
console.log(ayudanteSanta.color);
console.log(ayudanteSanta.ladrar());
console.log(ayudanteSanta.comer());