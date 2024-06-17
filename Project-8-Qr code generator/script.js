let userInput = document.querySelector(".container input")
let QRimageDiv = document.querySelector("#QRimage")
let QRimage = document.querySelector("#QR")
let generateBtn = document.querySelector(".container button")

generateBtn.addEventListener("click", createQRCode)

function createQRCode() {
    let data = userInput.value
    if (data.length>0) {
        QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data
        QRimageDiv.classList.add("showImage")
    } else {
        QRimageDiv.classList.add("emptyValue")
        setTimeout(()=>{
            QRimageDiv.classList.remove("emptyValue")
        },1000)
    }
}
