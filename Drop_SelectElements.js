/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function funcreturns truewhen the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arrshould be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;})should return [3, 4].
Passed
dropElements([0, 1, 0, 1], function(n) {return n === 1;})should return [1, 0, 1].
Passed
dropElements([1, 2, 3], function(n) {return n > 0;})should return [1, 2, 3].
Passed
dropElements([1, 2, 3, 4], function(n) {return n > 5;})should return [].
Passed
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})should return [7, 4].
Passed
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})should return [3, 9, 2].
*/

function dropElements(arr, func) {
var barr=[]
for(var i=0;i<=arr.length;i++){
barr.push([arr[i]]);
if(barr[i].filter(func).length!=0){break;}
}
return arr.slice(i);
}
