let coinURL="https://api.coinlayer.com/live"

let bitcoin=document.getElementById("bitcoin")
let ethereum=document.getElementById("ethereum")
let dogecoin=document.getElementById("dogecoin")

async function getData(){
    let response=await fetch(coinURL)
    let data=await response.json()
    console.log(data);
    // bitcoin.innerHTML=""
    // ethereum.innerHTML=""
    // dogecoin.innerHTML=""
}

getData()