/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function stringtoarray(str){
var arr = [];
for(let i=0;i<str.length;i++){
arr[i]=str[i];
}
return arr;
}

function reverseString(str) {
var arr = stringtoarray(str);

var reversedarray = [];
for(let i=0;i<arr.length;i++){
reversedarray[i]=arr[arr.length-1-i];
}

return reversedarray.join('');
}

console.log(reverseString("hello"));
