const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Jaipur", "Chennai"],
        correctAnswer: "New Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    }
];

let currentQuestion = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.innerText = option;
        optionElement.classList.add('option-btn');
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];
    const selectedOption = currentQuizData.options[selectedIndex];

    if (selectedOption === currentQuizData.correctAnswer) {
        // Handle correct answer logic (e.g., increase score)
        alert("Correct!");
    } else {
        // Handle incorrect answer logic
        alert("Incorrect!");
    }

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        // Display quiz completion message or redirect to result page
        alert("Quiz completed!");
    }
}

// Initial load
loadQuestion();
