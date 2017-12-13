const crypto = require('crypto');

let cipher = crypto.createCipher('aes-256-cbc', 'password');
let encrypted = cipher.update('abc', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log(encrypted); //8879d6fe953762da435f3b9e9d747e6f