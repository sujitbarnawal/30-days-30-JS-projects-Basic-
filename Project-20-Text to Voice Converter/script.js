let speech = new SpeechSynthesisUtterance()
let listenBtn = document.querySelector("button")

let voices = []
let voiceSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i)
        voiceSelect.options[i] = option
    });
}

listenBtn.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})

voiceSelect.addEventListener("change",()=>{
    speech.voice= voices[voiceSelect.value]
})