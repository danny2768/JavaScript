/*
    ===== Código de TypeScript =====
*/
// * Si ponemos el cursor sobre 'a' veremos que typescript nos dice que acepta cualquier tipo de variable (any)
let a = [];

// * Si colocamos el cursor sobe 'b' veremos que se infiere que el arreglo va a ser de strings.
// * No podemos agregar otro elemento que no corresponda a este tipo despues de inicializada
let b = ['Danie', 'Cobos'];

// * Si colocamos el cursos sobre 'c' veremos que esta variable se compone de varios tipos.
// * No podemos agregar otro elemento que no corresponda a estos tipos despues de inicializada
let c = ['Daniel', true]

// * Es preferible evitar esto denominando el tipo del arreglo
let habilidades: string[] = ['Bash','Counter']
habilidades.push('Healing')


// ! Se declara la interfaz a seguir para Personaje
// * Las interfaces al compilar no se pasan a JS, este tipo no existe en JS
interface Personaje {
    nombre: String,
    hp: number,
    habilidades: string[],
    // @ Al colocar un signo de interrogacion despues de la variable (puebloNatal) se permite que definir puebloNatal sea opcional.
    puebloNatal?: string
}

// ! Es importante definir que la constante personaje es de tipo Personaje
const personaje: Personaje = {
    nombre: 'Daniel',
    hp: 100,
    habilidades: ['Bash','Counter', 'Healing']
    // * No se define aqui puebloNatal ya que es opcional.
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje)
