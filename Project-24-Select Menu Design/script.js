let selectField = document.getElementById("select-field")
let list = document.getElementById("list")
let options = document.querySelectorAll(".options")
let selectedOption = document.getElementById("selectedOption")
let arrowImg = document.getElementById("arrowImg")

selectField.addEventListener("click", () => {
    if (list.style.visibility === "hidden") {
        list.style.visibility = "visible"  
        arrowImg.classList.add("rotate")    
    }else{
        list.style.visibility = "hidden"
        arrowImg.classList.remove("rotate")    
    }
})

options.forEach((option) => {
    option.addEventListener("click", (e) => {
        list.style.visibility = "hidden"
        arrowImg.classList.remove("rotate")
        selectedOption.innerHTML = e.target.textContent
    })
})

