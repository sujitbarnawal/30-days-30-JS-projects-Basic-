let buttons = document.querySelectorAll(".button")
let screen=document.getElementById("screen")

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        if(button.value==="AC"){
            screen.value=""
        }else if(button.value=="DE"){
            screen.value=screen.value.substring(0,screen.value.length-1)
        }else if(button.value=="="){
            screen.value=eval(screen.value)
        }else{
            screen.value+=button.value
        }
    })
});

