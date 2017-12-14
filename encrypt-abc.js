
const utils = require('./utils');

const word = 'abc';

utils.ask('Enter password: ').then(pass => {
    console.log(utils.encrypt(word, pass)); //8879d6fe953762da435f3b9e9d747e6f
});