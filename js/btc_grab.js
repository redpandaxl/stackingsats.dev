const apiBase = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const container = document.querySelector('#latest');

function fetchBTC() {
  fetch(apiBase)
    .then(response => response.json())
    .then(data => {
        const btcPrice = data.bpi.USD.rate.replace(",", "")
        const el = document.createElement("p");
        let sats = (1 / parseFloat(btcPrice))*100000000;
        el.innerHTML = `${sats.toFixed(2)} sats for $1.00`;
        container.appendChild(el);
    })
    .catch(function(err){
      console.log(err);
    });
}

fetchBTC();
