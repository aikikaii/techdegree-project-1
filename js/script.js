/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



//creating array of objects and storing quotes in it

var quotes = [{
        quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
        source: "Dr.Seuss",
        citation: " speech",
        year: 1966
    },
    {
        quote: "Life as if you were to die tomorrow. Learn as if you were to live forever.",
        source: "Mahatmna",
        citation: " speech",
        category: " life",
        year: 1920
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. ",
        source: "Steve Job",
        citation: " speech",
        category: " motivation",
        year: 2000
    },
    {
        quote: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
        source: "Steve Job",
        category: " motivation",
        year: 1995
    },
    {
        quote: "If things go wrong, don't go with them.",
        source: "Roger Babson"
    },
    {
        quote: "Unitl you're ready to look foolish, you'll never have the possibility of being great.",
        source: "Cher",
        category: " singer",
        year: 1946
    },
    {
        quote: "Wheter you think you can, or think you can't, you're probably right.",
        source: "Henry Ford"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        source: "Thomas Edison",
        category: " business",
        year: 1955
    },
    {
        quote: "I am afraid we must make the world honest before we can honestly say to our childer that honesty is the bes policy.",
        source: "George Bernard Shaw",
        year: 1944
    },
    {
        quote: "Surround yourself with only people who are going to lift you higher.",
        source: "Oprah Winfrey",
        category: " business",
        year: 1954
    }
]

//Printing out quotes to console

console.log(quotes);


//creating getRandomColor function that will randomly change background color

function getRandomColor() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
    document.body.style.background = backgroundColor;
};

//creatin function timer that will change quotes every 10 seconds

function timer() {
    window.setInterval('printQuote()', 10000);
}

//calling function timer

timer();

//creating getRandomQuote function that will throw random quote from quotes array

function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

// creating printQute function that is catching random quote from getRandomQuote function and display's it on screen

function printQuote() {
    var randomQuote = getRandomQuote();
    var HTML = "";
    HTML += "<p class='quote'>" + randomQuote.quote + "</p>";
    HTML += "<p class='source'>" + randomQuote.source;
    if (randomQuote.citation) {
        HTML += "<span class = 'citation'>" + randomQuote.citation + "</span>"
    }
    if (randomQuote.category) {
        HTML += "<span class='category'>" + randomQuote.category + "</span>";
    }
    if (randomQuote.year) {
        HTML += "<span class='year'>" + randomQuote.year + "</span>"
    }
    HTML += "</p>";

    document.getElementById('quote-box').innerHTML = HTML;

}

//calling printQuote function

printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//adding function getRandomColor to button / when it is clicked, it will randomly change background color

document.getElementById('loadQuote').addEventListener("click", getRandomColor, false);