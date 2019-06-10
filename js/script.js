/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Creates the array of 5 quotes incuding source,citation,and year
var quotes = [
  {
    quote:'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: '',
    year: '',
    type: 'poet, playwright'
  
 },
 {
    quote: 'It is never too late to be what you might have been.',
    source: 'George Eliot',
    citation: '',
    year: '',
    type: 'novelist'
    
 },

 {
  quote: 'Life without liberty is like a body without spirit.',
  source: 'Kahlil Gibran',
  citation: '',
  year: '' ,
  type: 'poet'
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    source: 'Mahatma Gandhi',
    citation:'' ,
    year: '',
    type: 'activist'
    
  },
  {
    quote: 'We delight in the beauty of the butterfly but rarely admit the changes it has gone through to achieve that beauty.',
    source: 'Maya Angelou',
    citation: '291 Maya Angelou Quotes- Jeff Napier',
    year: 'June 5 2014 ' ,
    type: 'activist, poet'
  }
]

 //creates a function to randomly select a quote out of the five to use. 
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];

  console.log(getRandomQuote);}
 
function printQuote(){
  var message = "";
  var randomQ = getRandomQuote(quotes);
  
    message += "<p class='quote'>" + randomQ.quote + "</p>";
    message += "<p class='source'>"+ randomQ.source;
    message += "<span class='type'>" + randomQ.type + "</span>";
    message += "<span class='citation'>" + randomQ.citation +"</span>";
    message += "<span class='year'>" + randomQ.year + "</span>";
    message += "</p>"

  document.getElementById('quote-box').innerHTML=message;

//changes the color of the background screen randomly for each new quote 

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);

  document.body.style.background = bgColor;
  
}

random_bg_color();

// sets interval of 25 seconds until automatically changes to a new quote

setInterval(function(){printQuote()},25000);
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  