
interface Product {
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

interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

const taxCalculation = ( options: TaxCalculationOptions ):number[] => {

    let total = 0;
    // ! REPASAR JS
    options.products.forEach( product => {
        total += product.price;
    })

    return [1,2]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;





export{}