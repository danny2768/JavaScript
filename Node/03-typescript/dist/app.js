"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(1);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found');
