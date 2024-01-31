
// * Funcion: se utiliza para centrarliazar la logica de un procedimiento que se puede
// * requerir usar repetidas veces

/*
Una marera tradicional pero menos correcta de inicializar funciones es:
function saludar() {
    console.log('Hola Mundo');
}
Si se declaran de esta manera con var saludar = 10 podemos cambiar el apuntador saludar y puede generar
un problema al invocar la funcion.
*/

// # Los parentesis indican que es una funcion.
// # Es buena practica que las funciones esten al princpio y abajo el llamado a las mismas.
const saludar = function(nombre){ // * 'nombre' es el argumento de la funcion.
    console.log('Hola ' + nombre);
}

saludar('Daniel');

// * Esto se puede hacer si es necesario trabajar con mas argumentos.
const saludar2 = function(nombre){ 
    console.log(arguments)
    console.log('Hola ' + nombre);
}

saludar2('Daniel', true, false)

// # Funcion de flecha o lamda function
// # Con los parentesis se indica la funcion
const saludarFlecha = () => {
    console.log('Hola flecha');
}

saludarFlecha();
// * Poniendole argumentos a la funcion quedaria asi:
// * los parentesis son opcionales al ponerle argumentos pero es buena practica dejarlos

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha2('Daniel Flecha');


console.log('--------------------Mas detalles------------------------');
// * Las funciones retornan valores

const sumar = (a, b) => {
    return a + b;

    // ? Como retornar varios valores?
    // * Estos se deben colocar entre []
    // * return [1,2]

    // ! Si hay codigo despues de un return este no se va ejecutar
}
console.log(sumar(10,20));


// * Cuando la funcion de flecha solo tiene el return se puede hacer de la siguiente manera:

const sumar2 = (a, b) => a + b;
console.log(sumar2(20,20));


function numAleatorio() {
    return Math.random()
}
console.log(numAleatorio());


const numAleatorio1 = function(){
    return Math.random();
}
console.log(numAleatorio1());


const numAleatorio2 = () => Math.random();
console.log(numAleatorio2());







