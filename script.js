const questions = [
    { question: "What is the symbol for Hydrogen?", options: ["H", "He", "O", "Li"], answer: "H" },
    { question: "Which element has the atomic number 8?", options: ["Nitrogen", "Oxygen", "Fluorine", "Neon"], answer: "Oxygen" },
    { question: "What is the symbol for Gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
    { question: "Which element is known as 'Hg'?", options: ["Mercury", "Magnesium", "Manganese", "Hafnium"], answer: "Mercury" },
    { question: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], answer: "6" },
    { question: "Which element is a Noble Gas?", options: ["Helium", "Hydrogen", "Boron", "Lithium"], answer: "Helium" },
    { question: "Symbol 'Na' belongs to which element?", options: ["Sodium", "Nitrogen", "Nickel", "Neon"], answer: "Sodium" },
    { question: "Which element has the symbol 'Fe'?", options: ["Iron", "Fluorine", "Francium", "Fermium"], answer: "Iron" },
    { question: "Atomic number 79 belongs to?", options: ["Silver", "Gold", "Platinum", "Lead"], answer: "Gold" },
    { question: "Which element is used in pencils?", options: ["Graphite", "Lead", "Carbon", "Boron"], answer: "Graphite" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultElement.style.display = "block";
    resultElement.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

showQuestion();
