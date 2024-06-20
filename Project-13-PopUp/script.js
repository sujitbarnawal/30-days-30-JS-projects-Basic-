let submitBtn=document.querySelector(".btn")
let popDiv=document.getElementById("pop-up")
let okBtn=document.getElementById("ok")


submitBtn.addEventListener("click",()=>{
    popDiv.style.visibility='visible'
    popDiv.style.top='50%'
    popDiv.style.transform='translate(-50%,-50%)'
})

okBtn.addEventListener("click",()=>{
    popDiv.style.visibility='hidden'
    popDiv.style.top='0'
    popDiv.style.transform='translate(-50%,-50%) scale(0.1)'
})



