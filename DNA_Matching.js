/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C”]]
*/

function pairElement(str) {
var newArr=str.split("");
var bewArr=[];
for(let i=0;i<str.length;i++){
bewArr.push([newArr[i],""]);
}
console.log(newArr[0])
for (let i=0;i<newArr.length;i++){
if(newArr[i]=="A"){
bewArr[i][1]="T";
}
else if(newArr[i]=="G"){
bewArr[i][1]="C";
}
else if(newArr[i]=="T"){
bewArr[i][1]="A";
}
else{
bewArr[i][1]="G";
}
}
console.log(bewArr[0][1]);
return bewArr;
}
