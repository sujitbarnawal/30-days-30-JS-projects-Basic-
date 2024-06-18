let success = document.getElementById("success")
let error = document.getElementById("error")
let invalid = document.getElementById("invalid")
let toastBox = document.getElementById("toast-box")

success.addEventListener("click", showMessage)
error.addEventListener("click", showMessage)
invalid.addEventListener("click", showMessage)

let successMessage = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`
let errorMessage = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error`
let invalidMessage = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again`

function showMessage(e) {
    let message = document.createElement("div")
    message.classList.add("message")
    if (e.target.innerHTML === "Success") {
        message.innerHTML = successMessage
    }
    else if (e.target.innerHTML === "Error") {
        message.innerHTML = errorMessage
        message.classList.add('error')
    }
    else if (e.target.innerHTML === "Invalid") {
        message.innerHTML = invalidMessage
        message.classList.add('invalid')
    }
    toastBox.appendChild(message)

    setTimeout(() => {
        message.remove()
    }, 5000)

}