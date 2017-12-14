const fs = require('fs');
const crypto = require('crypto');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) return console.error(`BOOM: ${err}`)
    callback(data)
  })
}

const saveFile = (fileName, data, callback) => {
    fs.writeFile(fileName, data, err => {
        if (err) return console.error(`BOOM: $${err}`)
        log(`saved ${fileName} succesfully`)
        callback
    })
}

const encrypt = (text, password, callback) => {
  let cipher = crypto.createCipher('aes-256-cbc', password)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  callback(encrypted)
}

const decrypt = (text, password, callback) => {
  let decipher = crypto.createDecipher('aes-256-cbc', password)
  let decrypted = decipher.update(text, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  callback(decrypted)
}

const log = data => {
  console.log(data)
}

const encryptFileContent = (data, callback) => {
  encrypt(data, 'password', encrypted => {
    callback(encrypted)
  })
}

const decryptFileContent = (data, callback) => {
  decrypt(data, 'password', decrypted => {
    callback(decrypted)
  })
}

encryptFileContent('abc', log)
decryptFileContent('8879d6fe953762da435f3b9e9d747e6f', log)

readFile('numbers-encrypted.txt', data => {
  decryptFileContent(data, log)
})

// readFile('numbers.txt', data => {
//   encryptFileContent(data, encrypted => {
//     saveFile('numbers-encrypted.txt', encrypted)
//   })
// })

//saveFile('test.txt', 'abc')

// readFile('numbers.txt', data => {
//     encryptFileContent(data, encrypted => {
//         console.log('this is encrypted: ' + encrypted)
//         decryptFileContent(encrypted, log)
//     })
//    });