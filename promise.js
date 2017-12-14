var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = 'https://api.coinmarketcap.com/v1/ticker/??convert=EUR&limit=10';

let myAsyncFunction = url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }


  myAsyncFunction(url).then(data => {
      let altcoins = JSON.parse(data);
      let output = '';
      for (let altcoin of altcoins) {
          output += `
${altcoin.symbol} / ${altcoin.name} EUR ${altcoin.price_usd}
${altcoin.percent_change_1h} % change in 1h
${altcoin.percent_change_24h} $ change in 24h
${altcoin.percent_change_7d} % change in 7d
`;
          console.log(output)
      }
  });
