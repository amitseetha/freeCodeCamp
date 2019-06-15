/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
var arr=str.split(" ");
var maxi=0;
for (var i=0;i<arr.length;i++){
if(arr[i].length>arr[maxi].length){
maxi=i;
}
}
return arr[maxi].length;
}
