const crypto = require('crypto');
const utils = require('./utils');

const word = 'abc';

utils.ask('Enter password: ').then(pass => {
    let cipher = crypto.createCipher('aes-256-cbc', pass);
    let encrypted = cipher.update(word, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted); //8879d6fe953762da435f3b9e9d747e6f
});