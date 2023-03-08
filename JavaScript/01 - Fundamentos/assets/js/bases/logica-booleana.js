
const regresaTrue = () => {
    console.log('RegresaTrue');
    return true;
}

const regresaFalse = () => {
    console.log('RegresaFalse');
    return false;
}





// @ Negacion
console.warn('Negacion');
console.log(!true);





// @ AND - True si todos los valores son verdaderos
console.warn('And');
console.log(true && true);
console.log(true && !false);
console.log(true && false);

// * Demonos cuenta que al ejecutar la siguiente operacion no imprime regresaTrue ya que
// * el primer elemento dio falso, por ende no ejecuta el resto de la sentencia
console.log(regresaFalse() && regresaTrue());





// @ OR - Regresa true si al menos 1 de las condiciones es true
console.warn('OR');
console.log(true || false);
console.log(false || true);

console.log( regresaTrue() || regresaFalse());
// * Demonos cuenta que al ejecutar la siguiente operacion no imprime regresaFalse ya que
// * el primer elemento dio true, por ende no ejecuta el resto de la sentencia




// @ Asignaciones
console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// * Cuando tenemos un true al inicio se asigna el ultimo valor que tengamos o hasta el primer falso.
// * Cuando tenemos un false al inicio se asigna false a la variable.
const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'mundo';
const a3 = 'Hola' && 'mundo' && false && true;
const a4 = false && 'Hola mundo';

const a5 = soyFalso || 'Ya no soy falso';
const a6 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a7 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5, a6, a7});


