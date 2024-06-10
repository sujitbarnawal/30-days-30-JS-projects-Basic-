let userInput = document.querySelector("#input-box")
let btn = document.querySelector(".row button")
let list = document.querySelector("#list-container")

btn.addEventListener("click", () => {

    if (userInput.value === "") {
        alert("You must write something")
    } else {
        let li = document.createElement("li")
        li.innerText = userInput.value
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerText="\u00d7"
        li.appendChild(span)
        userInput.value=""
        saveData()
    }
})

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

let saveData=()=>{
    localStorage.setItem("data",list.innerHTML)
}

let showData =()=>{
    list.innerHTML=localStorage.getItem("data")
}
showData()