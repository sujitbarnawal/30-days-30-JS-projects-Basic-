let progress = document.querySelector("#progress")
let song = document.querySelector("#song")
let controlIcon = document.querySelector("#control-icon")

song.addEventListener("loadedmetadata", () => {
    progress.max = song.duration
    progress.value = song.currentTime
})

controlIcon.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
})

// song.addEventListener("timeupdate", () => {
//     progress.value = song.currentTime;
// });

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

progress.addEventListener("change", () => {
    song.play()
    song.currentTime = progress.value
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
})

song.addEventListener("ended", () => {
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
});


