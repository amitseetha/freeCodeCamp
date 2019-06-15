/*
Flatten a nested array. You must account for varying levels of nesting.
steamrollArray([[["a"]], [["b"]]])should return ["a", "b"].
Passed
steamrollArray([1, [2], [3, [[4]]]])should return [1, 2, 3, 4].
Passed
steamrollArray([1, [], [3, [[4]]]])should return [1, 3, 4].
Passed
steamrollArray([1, {}, [3, [[4]]]])should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
var curry=[];

for (let e=0;e<arr.length;e++){
if(Array.isArray(arr[e])==false){
curry.push(arr[e]);
}
else{
curry = curry.concat(steamrollArray(arr[e]))
}
}
return curry;
}
