/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


1. Make an array of all arrays concatenated
2. for each element in combined array search indexOf the element in the remaining array i.e. form i+1 to array.length.While search is not -1, delete the array element, automatically reducing array.length.
3. When search is -1, move to next i in the altered length
4. return array after for loop
*/

function uniteUnique(arr) {
var newArray=[];
for(let i=0;i<arguments.length;i++){
var newArray = newArray.concat(arguments[i])
}
console.log(newArray)
console.log(newArray.slice(0+1).indexOf(newArray[0]))
for(let i=0;i<newArray.length;i++){
while (newArray.slice(i+1).indexOf(newArray[i])!=-1){
newArray.splice(i+1+newArray.slice(i+1).indexOf(newArray[i]),1);
}
}
return newArray;
}
