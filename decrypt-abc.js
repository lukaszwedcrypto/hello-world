const crypto = require('crypto');
const utils = require('./utils');

const secret = '8879d6fe953762da435f3b9e9d747e6f'; //abc

utils.ask('Enter password: ').then(pass => {
    console.log(utils.decrypt(secret, pass));
}).catch( err => console.log("Failed to decrypt"));