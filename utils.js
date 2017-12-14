const readline = require('readline');
const crypto = require('crypto');

module.exports = {
    encrypt: encrypt = (text, password) => {
        let cipher = crypto.createCipher('aes-256-cbc', password);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    },

    decrypt: decrypt = (text, password) => {
        let decipher = crypto.createDecipher('aes-256-cbc', password);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    },

    ask: ask = quesion => {
        return new Promise(resolve => {
            const rl = readline.createInterface(process.stdin, process.stdout);
            rl.question(quesion, line => {
                rl.close();
                resolve(line);
            });
        })
    }
};