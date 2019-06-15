/*
Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.
Approach:
1. splice array from 0,n then splice the remaining array
2. if arr.length is less than n return arr
*/

function chunkArrayInGroups(arr, size) {
var barr=[];
var p = arr.length;
if(p%size==0){
var k=Math.floor(p/size);
}
else {
var k=Math.floor(p/size)+1;
}
for(let i=0;i<k;i++){
if (arr.length<size){
barr.push(arr);
}
else{
barr.push(arr.splice(0,size));
}
}

return barr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
