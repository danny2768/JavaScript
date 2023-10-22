import { Product, taxCalculation } from './06-function-destructuring'
// @ A la hora de exportar e importar es importante que el archivo del cual se importa no 
// @ Ejecute ningun codigo, solo haga definiciones
// * Es por eso que aparecen los clg del 06-function-destructuring.ts
// * Normalmente no hay que preocuparse por este tipo de cosas en angular.

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },

    {
        description: 'iPad',
        price: 150
    }
];

const [total, tax] = taxCalculation({ 
    products: shoppingCart, 
    tax: 0.15 
});

console.log('---------------');
console.log('Total', total);
console.log('Tax', tax);