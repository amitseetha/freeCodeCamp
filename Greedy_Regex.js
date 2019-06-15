/*
Greedy Regex

Write a greedyregex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
*/

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
