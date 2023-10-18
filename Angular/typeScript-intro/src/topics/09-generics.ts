
// export function whatsMyType( argument: any ): any {
//     return argument
// }

// const amIString = whatsMyType('Hola mundo');
// const amINumber = whatsMyType(100);
// const amIArray = whatsMyType([1, 2, 3, 4, 5]);


// @ Si usamos el tipo de dato any no vamos a tener intellisense
// * TypeScript supone que 'Sabemos lo que estamos haciendo' 
// // When the truth is that we don't really know * 
// console.log( amIString.split(' ') );
// console.log( amINumber.split('') );
// console.log( amIArray.split('') );

// @ Para que la funcion sepa el tipo de dato usamos los genericos: <T>
export function whatsMyType<T>(argument: T): T {
    return argument
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );