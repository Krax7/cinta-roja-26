class Perro {

	constructor(noPatas, raza, color) {
		this.color = color
		this.noPatas = noPatas
		this.raza = raza
		this.vivo = true
	}

	getColor() {
		return this.color;
	}
}

// Aunque no mandemos a llamar al constructor, este se ejecuta automáticamente.
const ayudanteSanta = new Perro(4, 'galgo', 'café')
console.log(ayudanteSanta);
console.log(ayudanteSanta.getColor());

const snoppy = new Perro(4, 'caricatura', 'blanco y negro')
console.log(snoppy);
console.log(snoppy.getColor());
