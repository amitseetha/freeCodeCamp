/*
Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
var full = "abcdefghijklmnopqrstuvwxyz"
for(let i=0 ;i<str.length;i++){
if (full[full.indexOf(str[0])+i]!=str[i]){
return full[full.indexOf(str[0])+i];
}
}
return undefined;
}
