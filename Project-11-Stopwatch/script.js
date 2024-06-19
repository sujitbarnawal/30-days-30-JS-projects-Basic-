let stop = document.getElementById("stop");
let start = document.getElementById("start")
let reset = document.getElementById("reset")
let displayTime = document.getElementById("time")

let [seconds, minutes, hours] = [0, 0, 0]
let timer = null

function updateDisplay() {
    let s = seconds < 10 ? `0${seconds}` : seconds
    let m = minutes < 10 ? `0${minutes}` : minutes
    let h = hours < 10 ? `0${hours}` : hours
    displayTime.innerText = `${h}:${m}:${s}`
}

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0
        minutes++
        if (minutes === 60) {
            minutes = 0
            hours++
        }
    }
    updateDisplay()
}

start.addEventListener("click", () => {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000)
})

reset.addEventListener("click", () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0]
    updateDisplay()
})

stop.addEventListener('click', () => {
    clearInterval(timer)
})
