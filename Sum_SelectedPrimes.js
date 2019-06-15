/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
if(num<2){return 0;}
var sum=0;
for(var i=2;i<=num;i++){
for(var j=2;i%j!=0;j++){}
if(j==i){
sum=sum+i;
}
}
return sum;
}
