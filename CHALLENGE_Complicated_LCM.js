/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Steps:
1. First create array of prime numbers between the two numbers
2. For each prime number compute highest power needed across teh range. Function (number, prime number){if modulo != 0 then =i else i++ and modulo of quotient - loop}
2A. (two loops - outer for prime numbers and inner across range- create an array of max exponent for each prime number as a result
3. Answer will be multiplication of (prime number^exponent)s (easy)
*/

function smallestCommons(arr) {
//Sorted arr
var sortedArr = arr.sort((a,b)=>a-b);

//Full Sorted Arr
var fullSortedArr=[];
for(let i=arr[0];i<=arr[1];i++){
fullSortedArr.push(i);
}
//Prime numbers in the array
var allPrimes=[];
for(var i=2;i<=fullSortedArr[0]+fullSortedArr.length-1;i++){
for(var j=2;i%j!=0;j++){}
if(j==i){allPrimes.push(i)}
}

//find necessary exponent for all primes for each number in range
var maxOfPrime=[];//this array will contain the maximum powers of each prime number needed across the range
for(let p=0;p<=allPrimes.length;p++){
var powersOnePrime=[];//this array will contain power of the prime number in loop needed for all numbers across range
for (let q=0;q<fullSortedArr.length;q++){
var loopcount=0;//this will keep power of the prime number needed for the number in loop
var fullNumber=fullSortedArr[q];
while(fullNumber%allPrimes[p]===0){
loopcount++;
fullNumber = fullNumber/allPrimes[p];
}
powersOnePrime.push(loopcount)//loopcount of primenumber for all numbers
}
maxOfPrime.push(powersOnePrime.sort((a,b)=>b-a)[0])//find max of powers of the prime number and store in maxOfPrime[]
}
//After this I will have an array with needed powers of each primenumber in allPrimes

//Finding product of max powers of allPrimes
var Product =1;
for (let r=0;r<allPrimes.length;r++){
Product = Product*Math.pow(allPrimes[r],maxOfPrime[r]);
}
return Product;
}
