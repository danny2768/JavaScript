
export interface Product {
    description: string,
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "IPad Air",
    price: 350.0
}

export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}


// @ Podemos cambiar el tipo de retorno en la funcion taxCalculation
// const taxCalculation = ( options: TaxCalculationOptions ): number[] => { 
// * Sabemos que la funcion siempre va a devolver una tupla, entonces reemplazamos :number[] por :[number, number]
// const taxCalculation = ( options: TaxCalculationOptions ): [number, number] => { 

// @ Podemos desestructurar options
// const taxCalculation = ( { tax, products }: TaxCalculationOptions ): [number, number] => { 

// @ podemos desestructurar options dentro de la funcion:
export const taxCalculation = ( options: TaxCalculationOptions ): [number, number] => { 

    const { tax, products } = options;

    let total = 0;
    // options.products.forEach( product => {
    //     total += product.price;
    // })

    // @ Podemos aplicar la desestructuracion en el forEach:
    products.forEach( ({ price })  => {
        total += price;
    })

    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total, taxTotal ] = taxCalculation({ 
    products: shoppingCart,
    tax: tax
    
    // * Segun el ECMAScript 6 es valido :
    // tax, // * Debido a que ya habiamos declarado la constante con el mismo nombre
    
});

console.log('Total: ', total, 'Tax: ', taxTotal);



// export{}