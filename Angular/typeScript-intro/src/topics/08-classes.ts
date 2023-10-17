
export class Person {
    // public name: string;
    // private address: string;

    // @ La visibilidad se puede modificar en los argumentos

    constructor ( 
        public name: string, 
        private address: string = 'No address'
        ) {}
}

// @ Extender una clase:
// export class Hero extends Person{
//     constructor( 
//         public alterEgo: string, 
//         public age: number, 
//         public realName: string 
//     ) {
//         super(realName, 'New York');
//     }
// }

// @ Priorizar la composicion sobre la herencia:
export class Hero{

    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}

const Tony = new Person('Tony Stark', 'New York');
const IronMan = new Hero('IronMan', 45, 'TonyStark', Tony);
console.table(IronMan);

// * De desta manera si cambia la clase persona no se va a ver afectada directamente 
// * la clase Hero.
