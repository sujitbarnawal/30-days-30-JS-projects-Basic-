let day = document.getElementById("days")
let hour = document.getElementById("hours")
let minute = document.getElementById("minutes")
let second = document.getElementById("seconds")


let lastDate = new Date("Sep 30,2024 00:00:00").getTime()


let x = setInterval(() => {
    let now = new Date().getTime()
    let gap = lastDate - now

    let days = Math.floor(gap / (1000 * 60 * 60 * 24));
    if(days<10){
        days="0"+days
    }

    let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hours<10){
        hours="0"+hours
    }

    let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));  
    if(minutes<10){
        minutes="0"+minutes
    }

    let seconds = Math.floor((gap % (1000 * 60)) / 1000);
    if(seconds<10){
        seconds="0"+seconds
    }

    day.innerHTML = days
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds

    if (gap < 0) {
        clearInterval(x)
        day.innerHTML = "00"
        hour.innerHTML = "00"
        minute.innerHTML = "00"
        second.innerHTML = "00"
    }
}, 1000)