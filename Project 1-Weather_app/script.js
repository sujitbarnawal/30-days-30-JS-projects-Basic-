let humidity=document.querySelector(".humidity")
let wind=document.querySelector(".wind")
let temp=document.querySelector(".temp")
let city=document.querySelector(".city")
let search_input=document.querySelector(".search input")
let search_button=document.querySelector(".search button")
let icon=document.querySelector(".weather-icon")
let weather=document.querySelector(".weather")


let apiKey="5548afa741f2ca138592be96c1fa8c82"
let apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather(cityName){
    
    let response=await fetch(apiURL+cityName+`&appid=${apiKey}`)
    let data= await response.json()

    city.innerText=`${data.name}`
    humidity.innerText=`${data.main.humidity}%`
    wind.innerText=`${data.wind.speed}Km/hr`
    temp.innerText=`${Math.round(data.main.temp)}°C`

    if(data.weather[0].main==="Clear"){
        icon.src="images/clear.png"
    }else if(data.weather[0].main==="CLouds"){
        icon.src="images/clouds.png"
    }else if(data.weather[0].main==="Drizzle"){
        icon.src="images/drizzle.png"
    }else if(data.weather[0].main==="Mist"){
        icon.src="images/mist.png"
    }else if(data.weather[0].main==="Rain"){
        icon.src="images/rain.png"
    }else if(data.weather[0].main==="Snow"){
        icon.src="images/snow.png"
    }

    weather.style.display="block"



    
}

search_button.addEventListener("click",()=>{
    checkWeather(search_input.value)
})
