let quote = document.querySelector("blockquote")
let author = document.querySelector(".quote-box span")
let newQuote = document.querySelector("#new")
let tweet = document.querySelector("#tweet")

let url = 'https://api.quotable.io/random'

async function getQuote(url) {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    quote.innerHTML=`${data.content}`
    author.innerHTML=`${data.author}`
}

function generateQuote(){
getQuote(url)
}
generateQuote()

newQuote.addEventListener("click",generateQuote)
tweet.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+" by "+author.innerHTML,"Tweet window","width=600,height=300")
})





