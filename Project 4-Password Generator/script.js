let passScreen = document.getElementById("password")
let button = document.querySelector("button")
let copyIcon = document.querySelector(".display img")

button.addEventListener("click",generatePassword)

function generatePassword(){
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`><?|/"
    for (let i = 0; i < 8; i++) {
        let char=Math.floor(Math.random()*str.length)
        pass+=str[char]
    }
    passScreen.value=pass
}

copyIcon.addEventListener("click",()=>{
    window.navigator.clipboard.writeText(passScreen.value)
    passScreen.select()
})