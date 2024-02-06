const getAgePlugin = require('get-age');

const getAge = (birthDate) => {
    if (!birthDate) return new Error('birthdate is required');
    return getAgePlugin(birthDate);
}

module.exports = {
    getAge,
}
