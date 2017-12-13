const crypto = require('crypto');
const utils = require('./utils');

const secret = '8879d6fe953762da435f3b9e9d747e6f';

utils.ask('Enter password: ').then(pass => {
    let decipher = crypto.createDecipher('aes-256-cbc', pass);
    let decrypted = decipher.update(secret, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted); //abc
    console.log("pass" + pass)
}).catch( err => console.log("Failed to decrypt"));