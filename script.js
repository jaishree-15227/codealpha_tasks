let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML is used to create web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used for styling web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds interactivity to web pages."
    }
];

let currentIndex = 0;

function displayCard() {
    document.getElementById("question").innerText =
        flashcards[currentIndex].question;

    document.getElementById("answer").innerText =
        flashcards[currentIndex].answer;

    document.getElementById("answer").style.display = "none";
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }
}

function addCard() {
    let question =
        document.getElementById("newQuestion").value;

    let answer =
        document.getElementById("newAnswer").value;

    if (question !== "" && answer !== "") {
        flashcards.push({
            question: question,
            answer: answer
        });

        alert("Flashcard Added!");

        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";
    }
}

function editCard() {
    let question =
        document.getElementById("newQuestion").value;

    let answer =
        document.getElementById("newAnswer").value;

    if (question !== "" && answer !== "") {
        flashcards[currentIndex].question = question;
        flashcards[currentIndex].answer = answer;

        displayCard();

        alert("Flashcard Updated!");
    }
}

function deleteCard() {
    if (flashcards.length > 1) {
        flashcards.splice(currentIndex, 1);

        if (currentIndex >= flashcards.length) {
            currentIndex = flashcards.length - 1;
        }

        displayCard();

        alert("Flashcard Deleted!");
    }
}

displayCard();