let quotes = [
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "It is our choices that show what we truly are.",
        author: "J.K. Rowling"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

function newQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        '"' + quotes[randomIndex].text + '"';

    document.getElementById("author").innerText =
        "- " + quotes[randomIndex].author;
}

newQuote();