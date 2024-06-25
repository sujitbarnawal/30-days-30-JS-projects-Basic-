let number = document.getElementById("number")
let progress = 0

setInterval(() => {
    if (progress == 65) {
        clearInterval();
    } else {
        progress += 1
        number.innerHTML = progress + "%"
    }
}, 31)

