
const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad } `);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad } `);
    }
}

// fer.imprimir();
// pedro.imprimir();


// @ Esto no es eficaz. Debido esto JS creo instancias.

function Persona( nombre, edad ) {
    console.log(`Se ejecuto esta linea`);

    this.nombre = nombre;
    this.edad = edad;

    // this.imprimir = () => {
    //     console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad } `);
    // }
    this.imprimir = function () {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad } `);
    }
}


const maria = new Persona('Maria', 18),
      melissa = new Persona('Melissa', 35);

// console.log( maria );

maria.imprimir();
melissa.imprimir();