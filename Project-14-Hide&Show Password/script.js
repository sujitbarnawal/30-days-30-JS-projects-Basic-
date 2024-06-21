let password = document.querySelector("#password")
let icon = document.querySelector(".input-box img")

icon.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
        icon.src = "images/eye-open.png"
    }else{
        password.type="password"
        icon.src="images/eye-close.png"
    }
})