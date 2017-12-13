const crypto = require('crypto');

let decipher = crypto.createDecipher('aes-256-cbc', 'password');
let decrypted = decipher.update('8879d6fe953762da435f3b9e9d747e6f', 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log(decrypted); //abc