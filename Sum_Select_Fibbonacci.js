/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10)should return 10because all odd Fibonacci numbers less than or equal to 10are 1, 1, 3, and 5.
*/

function sumFibs(num) {
function fib (n){
if (n===1||n===2){return 1;}
return fib(n-1)+fib(n-2);
}
var sum=0;
for(let i=1;fib(i)<=num;i++){
if((fib(i))%2!==0){
sum=sum+fib(i);
}
}
return sum;
}
