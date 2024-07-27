const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Hamlet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: 1
    },
    {
        question: "What is the smallest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Mercury"],
        correctAnswer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    const questionElement = document.querySelector(".question");
    const choicesElements = document.querySelectorAll(".choice");
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    choicesElements.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
    });
}

function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (choice === correctAnswer) {
        score++;
    }
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("next-btn").disabled = true;
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("score").textContent = score;
}
