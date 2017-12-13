const readline = require('readline');

module.exports = {

    ask: ask = (quesion) => {
        return new Promise(resolve => {
            const rl = readline.createInterface(process.stdin, process.stdout);
            rl.question(quesion, line => {
                rl.close();
                resolve(line);
            });
        })
    }
};