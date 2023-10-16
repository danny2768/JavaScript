
// @ Instrucciones Bloqueantes
alert('Hola mundo');

// * Message, Default value
let nombre = prompt('Cual es tu nombre?', 'Ingresa tu nombre');
console.log(nombre)
// * Al darle cancelar al promt returna null, null != undefined

// * True or False quiestion
const selection = confirm('U sure?')
console.log(selection)

// @ alert, prompt y confirm son metodos que se encuentran en el objeto window, 
// @ por lo tanto no podria correrse en la terminal a través de node.\


