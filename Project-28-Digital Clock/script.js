let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

function updateTime() {
    let today = new Date()

    let h = today.getHours()
    if(h>12){
        x=h-12
        h="0"+x
    }else if(h<12){
        h="0"+today.getHours()
    }
    let m = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    let s = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()

    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s
}

setInterval(updateTime, 1000)
































