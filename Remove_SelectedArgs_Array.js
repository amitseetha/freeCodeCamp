/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note

You have to use the argumentsobject.
*/

function destroyer(arr) {
var args = Array.prototype.slice.call(arguments);
return arr.filter((e)=>args.indexOf(e)==-1);
}
