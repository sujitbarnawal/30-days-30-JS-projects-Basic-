let password=document.getElementById("password")
let message=document.getElementById("message")
let strength=document.getElementById("strength")
let submitBtn=document.getElementById("submit")

password.addEventListener("input",()=>{
    if(password.value.length>0){
        message.style.display="block"
    }else{
        message.style.display="none"
    }


    if(password.value.length<5){
        message.style.color="red"
        password.style.borderColor="red"
        strength.innerHTML="weak"
    }
    else if(password.value.length<10){
        message.style.color="yellow"
        password.style.borderColor="yellow"
        strength.innerHTML="good"
    }else{
        message.style.color="green"
        password.style.borderColor="green"
        strength.innerHTML="strong"
    }
})

submitBtn.addEventListener("click",()=>{
    alert(`Your password is ${strength.innerHTML} and has been submitted.`)
})
