//First part of the quote.
let startOfQuote = ["You must ", "Do not forget to ", "Just remember to ", "You can ", "Nothing is impossible "];

//Second part of quote.
let middleOfQuote = ["reach for the stars, ", "be happy, ", "be successful, ",  "better yourself, ", "do your best, "];

// End part of quote.
let endOfQuote = ["be inspired.", "forever and always.", "today and tomorrow.", "you have no limits.", "be who you want to be."];

//Function to randomly select element from array.
function selectQuote(array) {
    return (array[Math.floor(math.random()*array.length)]);
}

//Stringing together an element from each array.
let finalQuote = selectQuote(startOfQuote) + selectQuote(middleOfQuote) + selectQuote(endOfQuote);

//Log variable finalQuote to read full quote.
console.log(finalQuote);
