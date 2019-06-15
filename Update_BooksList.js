/*
Refactor (rewrite) the code so the global array bookListis not changed inside either function. The addfunction should add the given bookNameto the end of an array. The removefunction should remove the given bookNamefrom an array. Both functions should return an array, and any new parameters should be added before the bookNameone.
*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (booklist,bookName) {
let newBookList = booklist.slice(0);
newBookList.push(bookName);
return newBookList;
// Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line

function remove (booklist,bookName) {
if (booklist.indexOf(bookName) >= 0) {
let newBookList = booklist.slice(0);
newBookList.splice(booklist.indexOf(bookName),1);
return newBookList;
// Add your code above this line
}
return "book is not in list"
}
