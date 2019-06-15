*/
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
if(arr[0]>arr[1]){
return ((arr[0]*(arr[0]+1)-arr[1]*(arr[1]-1))/2);
}
return ((arr[1]*(arr[1]+1)-arr[0]*(arr[0]-1))/2);
}
