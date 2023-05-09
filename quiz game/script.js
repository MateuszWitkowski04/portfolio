const questions = [
    {
        question: "Which animal is the biggest?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Ant", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Who was the Ancient Greek God of the Sun? ",
        answers: [
            {text: "Apollo", correct: true},
            {text: "Artemis", correct: false},
            {text: "Hades", correct: false},
            {text: "Demeter", correct: false}
        ]
    },
    {
        question: "What artist has the most streams on Spotify?",
        answers: [
            {text: "Popek - King of Albania", correct: false},
            {text: "Adele", correct: false},
            {text: "Kanye West", correct: false},
            {text: "Drake", correct: true}

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        nextButton.style.display = "block";
    })
}

function showScore(){
    resetState();
    questionElement.innerHTML = "Your score = " + score + " / " + questions.length;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();