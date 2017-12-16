const XMLHttpRequest = require('xhr2');

const get = (url) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.open('GET', url)

    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response)
      } else {
        reject(Error(req.statusText))
      }
    }

    req.onerror = () => {
      reject(Error('Network error'))
    }

    req.send()
  })
}

get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(JSON.parse).then(response => {
  let [one, two, three] = response
  for (let currency of response) {
    console.log(`${currency.symbol} - ${currency.price_usd} USD`)
  }
}, error => {
  console.error("Failed!", error)
})