
const skills: string[] = ['Bash', 'Counter', 'Healing'];


// * Un objeto literal no se puede tipar por si solo, para ello usamos una interfaz

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Riverdale';
console.table(strider);

export{}