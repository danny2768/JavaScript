// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

// const { getUUID, getAge } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
    return ( {name , birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

const buildPerson = ( {name , birthdate }) => {
    return {
        id: getUUID(),
        name,
        birthdate,
        age: getAge(birthdate)
    }
}

// const obj = {
//     name: 'John Doe',
//     birthdate: '1985-11-23'
// }

// const John = buildPerson(obj);
// console.log(John);

module.exports = { 
    buildMakePerson 
}