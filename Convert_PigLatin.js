/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
if(/^[aeiou]/.test(str)==true){
return str +'way';
}
else {
var regex = str.match(/^[^aeiuo]+/);
console.log(regex)
var gtr=str.replace(/^[^aeiuo]+/,"");
console.log(gtr)
return gtr + regex + 'ay';
}
}
