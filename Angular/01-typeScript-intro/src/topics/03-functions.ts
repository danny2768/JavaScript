
// @Add Numbers function
// # Normal Function
function addNumbers( a: number , b: number): number {
    return a + b;
}

// # Arrow Function
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}



// @ Multiply function
// # Normal Function
function multiplyFunction( num1: number, num2?: number, base: number = 2): number {
    return num1 * base;
}

const multiplyArrowFunction = (num1: number, num2?: number, base: number = 2): number => {
    return num1 * base;
}

// const result1: number = addNumbers(1,2);
// console.log({result1});

// const result2: string = addNumbersArrow(1, 2);
// console.log({result2});

// const result3: number = multiplyFunction(5);
// console.log({result3});

// const result4: number = multiplyArrowFunction(5);
// console.log({result4});


interface Character {
    name: string;
    hp: number;

    showHp: () => void
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}


const strider: Character = {
    name : 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter( strider, 10);

export{}