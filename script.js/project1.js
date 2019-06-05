/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote:'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: '',
    year: ''
 },
 {
    quote: 'It is never too late to be what you might have been.',
    source: 'George Eliot',
    citation: '',
    year: '' 

 },

 {
  quote: 'Life without liberty is like a body without spirit.',
  source: 'Kahlil Gibran',
  citation: '',
  year: '' 

},
{
  quote: 'Be the change that you wish to see in the world',
  source: 'Mahatma Gandhi',
  citation: '',
  year: '' 

},
{
  quote: 'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty',
  source: 'Maya Angelou',
  citation: 'Jeff Napier, 291 Maya Angelou Quotes',
  year: 'June 6th 2014 ' 

},

console.log(quotes)

]



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  var randomNumber = (math.floor()*quotes.length);
  return quote [randomNumber].quote;

  alert(quote)


}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.