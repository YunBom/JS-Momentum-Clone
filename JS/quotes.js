const quotes = [{
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Will Smith",
},
{
    quote :"Not how long, but how well you have lived is the main thing.",
    author:"Seneca",
},
{   quote: "In order to write about life first you must live it.",
    author: "Ernest Hemingway",
},
{    
    quote: "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra",
},
{
    quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    author: "Leo Burnett",
},
{
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
},
{
    quote:"The unexamined life is not worth living.",
    author:"Socrates",
},
{
    quote: "You never really learn much from hearing yourself speak.",
    author: "George Clooney",
},
{
    quote: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    author: "Celine Dion",
},
{
    quote: "Live for each second without hesitation.",
    author: "Elton John",
},
{
    quote: "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller",
},
{
    quote: "When we do the best we can, we never know what miracle is wrought in our life or the life of another.",
    author: "Helen Keller",
},
{
    quote: "The healthiest response to life is joy.",
    author: "Deepak Chopra",
},
{
    quote:"Life is like a coin. You can spend it any way you wish, but you only spend it once.",
    author: "Lillian Dickson",
},
{
    quote: "The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love.",
    author:"Wordsworth",
},
{
    quote:  "In three words I can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost",
},
{
    quote: "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Charles Swindoll"
},
{
    quote: "Life’s tragedy is that we get old too soon and wise too late.",
    author: "Benjamin Franklin",
},
{
    quote: "Life is about making an impact, not making an income.",
    author: "Kevin Kruse",
},
{
    quote: "Every strike brings me closer to the next home run.",
    author:"Babe Ruth",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];    // 명언을 랜덤으로 나타내는 명령어

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


