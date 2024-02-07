// @ 01-template
// const { emailTemplate } = require('./js-foundation/01-template')
// console.log(emailTemplate);

// @ 02-destructuring
// require('./js-foundation/02-destructuring')

// @ 03-callbacks
// const { getUserById } = require('./js-foundation/03-callbacks')
// const id = 1;
// getUserById( id, ( error, user ) => {
//     if (error) throw new Error( error );
//     console.log(user);
// });

// @ 04-arrow
// const {getUserById} = require('./js-foundation/04-arrow')
// const id = 2;
// getUserById( id, ( error, user ) => {
//     if (error) throw new Error( error );
//     console.log(user);
// });

// @ 05-factory
// const { buildMakePerson } = require('./js-foundation/05-factory')

// const { getUUID, getAge } = require('./plugins');
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//     name: 'John Doe',
//     birthdate: '1985-10-21'
// }

// const John = makePerson( obj );
// console.log({John});

// @ 06-promises
// const getPokemonById = require('./js-foundation/06-promises')

// // getPokemonById(1).then(console.log)
// getPokemonById(10)
//     .then( pokemon => console.log({pokemon}) )
//     .catch( err => console.log(`Por favor intente de nuevo`) )
//     .finally( () => console.log(`Finalizado`) )

// @ Logger - plugins

const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hello World');
logger.error('Esto es algo malo!');





