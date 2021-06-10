const quizData = [
    {
        question: "PM Modi has inaugurated E100 ethanol dispensing stations in _______?",
        a: "Pune",
        b: "New Delhi",
        c: "Kolkata",
        d: "Mumbai",
        correct: "a"
    },
    {
        question: "Which firm has launched India’s 1st NFT Marketplace?",
        a: "Angel Broking",
        b: "WazirX",
        c: "Indiabulls",
        d: "GrowMore",
        correct: "b"
    },
    {
        question: "Which State has the cheapest Vegetarian Thali as per the Economic Survey 2019-20?",
        a: "Punjab",
        b: "Jharkhand",
        c: "Uttar Pradesh",
        d: "Bihar",
        correct: "b"
    },
    {
        question: "The Subject Expert Committee (SEC) has approved which COVID-19 vaccine for phase 2 and 3 human clinical trials on 2 to 18-year-olds?",
        a: "J&J",
        b: "Covishield",
        c: "Covaxin",
        d: "Sputnik",
        correct: "c"
    },
    {
        question: "Which vaccine maker has pledged $2,50,000 as humanitarian aid to India?",
        a: "RDIF",
        b: "Pfizer",
        c: "Moderna",
        d: "AstraZeneca",
        correct: "d"
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const quesEl = document.getElementById("question");
const option_a = document.getElementById("option_a");
const option_b = document.getElementById("option_b");
const option_c = document.getElementById("option_c");
const option_d = document.getElementById("option_d");
const submitButton = document.getElementById("submit");

let currentData = 0;
let score = 0;
loadQuestion();

function loadQuestion() {
    unMark();

    const currentQuesData = quizData[currentData];

    quesEl.innerText = currentQuesData.question;
    option_a.innerText = currentQuesData.a;
    option_b.innerText = currentQuesData.b;
    option_c.innerText = currentQuesData.c;
    option_d.innerText = currentQuesData.d;
}

function isMarked() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function unMark() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitButton.addEventListener("click", () => {
    const answer = isMarked();

    if (answer) {
        if (answer === quizData[currentData].correct) {
            score++;
        }

        currentData++;
        if (currentData < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()">Play Again</button>
            `;
        }
    }



});