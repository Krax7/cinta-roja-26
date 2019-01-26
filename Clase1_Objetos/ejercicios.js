class Penguin {

    constructor(character, origin, author, notes) {
        this.character = character;
        this.origin = origin;
        this.author = author;
        this.notes = notes;
    }

    setVolar(vuela) {
        this.puedeVolar = vuela;
        console.log(this.puedeVolar);
    }

    graznar() {
        return "kaww kaww!!";
    }

    // 5
    saludar() {
        return "Holi, soy un pingüino. Me llamo " + this.character;
    }

    cambiarNombre (nuevoNombre) {
        this.character = nuevoNombre;
        console.log(this);
    }
    
    volar() {
        if(this.puedeVolar) {
            return "¡Puedo volar!";
        } else {
            return "No puedo volar :(";
        }
    }
}

// 1
let penguin = new Penguin('Misha', 'Death and the Penguin, Penguin Lost', 'Andrey Kurkov', 'A cheeky penguin who gets in over his head in mafia affairs and political intrigue.');
// 2
console.log("Holi, soy un pingüino. Me llamo " + penguin.character);
// 3
console.log(penguin);
penguin.setVolar(false);
console.log(penguin);
// 4
console.log(penguin.graznar());
// 6
penguin.cambiarNombre("Señor pingu");
console.log(penguin.saludar());
// 7
console.log(penguin.volar());
// 8
console.log(penguin);
penguin.setVolar(true);
console.log(penguin);
// 9
var mole = {
    title: "Mole",
    portions: 2,
    ingredients: [
        "Canela",
        "Comino",
        "Cocoa"
    ]
}
console.log(mole);
// 10
const libros ={
    libro1: {
        titulo: 'Los 3 del misterio',
        autor: 'Mi infancia',
        leido: true
    },
    libro2: {
        titulo: 'El gran diseño',
        autor: 'Stephen Hawking',
        leido: true
    },
    libro3: {
        titulo: 'GRIT',
        author: 'Una mujer china',
        leido: false
    }
}
console.log(libros);
console.log(libros.libro2.autor);
// 11
penguin.setVolar(true);
