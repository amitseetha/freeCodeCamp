/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
function largestOfFour(arr) {
var max=[0,0,0,0];
for(let i=0;i<arr.length;i++){

for(let j=0;j<arr[i].length-1;j++){
if (arr[i][j+1]>arr[i][j]){
max[i]=(arr[i][j+1]);
}
else {
max[i]=arr[i][j];
arr[i][j+1]=arr[i][j];
}

}
}
console.log(max);
return max;
