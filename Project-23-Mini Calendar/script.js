let date=document.querySelector("#date")
let day=document.querySelector("#day")
let month=document.querySelector("#month")
let year=document.querySelector("#year")

let today=new Date()

let weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months=["January","February","March","April","May","June","July","August","September","October","November","December"]

date.innerHTML=today.getDate()
if(date.innerHTML<10){
    date.innerHTML="0"+date.innerHTML
}
month.innerHTML=months[today.getMonth()]
day.innerHTML=weekDays[today.getDay()]
year.innerHTML=today.getFullYear()