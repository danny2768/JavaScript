export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Daniel',
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger) => {

    // * Children es opcional:
    // const howManyChildren = passenger.children?.length || 0;

    // * La funcion siempre va a tener un tipo de dato children:
    const howManyChildren = passenger.children!.length;
    // @ Al anterior operador (!) se le llama not null assertion operator


    console.log(`Los hijos de ${passenger.name} son ${howManyChildren}`);

    return howManyChildren;
}

// returnChildrenNumber(passenger1)
returnChildrenNumber(passenger2)