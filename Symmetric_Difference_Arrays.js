/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
var newArr = arr1.filter((e)=>arr2.indexOf(e)==-1).concat(arr2.filter((e)=>arr1.indexOf(e)==-1));
return newArr;
}
