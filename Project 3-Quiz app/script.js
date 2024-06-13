let questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Girrafe",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false}
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Laos",correct:false},
            {text:"Vatican City",correct:true},
            {text:"Peru",correct:false},
            {text:"Chile",correct:false}
        ]
    },
    {
        question:"Which is the largest country in the world?",
        answers:[
            {text:"Canada",correct:false},
            {text:"China",correct:false},
            {text:"Russia",correct:true},
            {text:"India",correct:false}
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Australia",correct:true},
            {text:"Asis",correct:false},
            {text:"Africa",correct:false},
            {text:"Europe",correct:false}
        ]
    }
];


let question=document.getElementById("question")
let answerButtons=document.getElementById("answer-buttons")
let nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0
let score=0

function startQuiz(){
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML="Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion =questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1
    question.innerHTML=`${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach((answer)=>{
        let button= document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}


function resetState(){
    nextButton.style.display="none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    let selectedButton=e.target
    if(selectedButton.dataset.correct === "true"){
        selectedButton.classList.add("correct")
        score++
    }else{
        selectedButton.classList.add("incorrect")
    }
   

    Array.from(answerButtons.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nextButton.style.display="block"
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState()
    question.innerHTML=`Your score is ${score} out of ${questions.length}!`
    nextButton.innerHTML=`Play Again`
    nextButton.style.display='block'
}

startQuiz();