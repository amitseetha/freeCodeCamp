/*
Arrow Function - squares of selected numbers from array
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArrayand store the new array in the variable squaredIntegers.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
"use strict";
arr = arr.filter( (elements) => elements > 0 && elements % parseInt(elements) === 0 );
arr = arr.map( (elements) => elements*elements );
const squaredIntegers = arr;
return squaredIntegers;
};
