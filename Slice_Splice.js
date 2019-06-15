/*
You are given two arrays and an index.

Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.

Begin inserting elements at index nof the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
var arr3=[...arr2.slice(0,n),...arr1,...arr2.slice(n,arr2.length)];
return arr3;
}
