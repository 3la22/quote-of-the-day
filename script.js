const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    text: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    text: "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
    author: "Bob Marley",
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
];


let currentIndex = 0;


function getRandomIndex() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentIndex);


  return randomIndex;
}


function showNewQuote() {
  currentIndex = getRandomIndex();

  const quoteEl  = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.textContent  = `"${quotes[currentIndex].text}"`;
  authorEl.textContent = `— ${quotes[currentIndex].author}`;
}


const btn = document.getElementById("btn");
btn.addEventListener("click", showNewQuote);
