let apiKey="5548afa741f2ca138592be96c1fa8c82"
let apiURL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=hetauda&appid=${apiKey}`

async function checkWeather(){
    let response=await fetch(apiURL)
}
