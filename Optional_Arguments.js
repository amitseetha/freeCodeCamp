/*
Optional Arguments:

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3)should return 5, and addTogether(2)should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3)returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3)should return 5.
Passed
addTogether(2)(3)should return 5.
Passed
addTogether("http://bit.ly/IqT6zt")should return undefined.
Passed
addTogether(2, "3")should return undefined.
Passed
addTogether(2)([3])should return undefined.

1. Can't think of where to start
2.

Because Programming teaches you to think. And thinking is rewarding.
*/
function addTogether(x,y) {
if (arguments.length==1){
if(typeof(x)!='number'){return undefined;}
return function oneLeg(y){
if(typeof(y)!='number'){return undefined;}
return x+y;}
}
if(typeof(x)!='number'||typeof(y)!='number'){return undefined;}
return x+y;
}
