/*
Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if numis not a positive number.
*/
function repeatStringNumTimes(str, num) {
var a="";
if(num<=0){
return "";
}
else {
for (let i=1;i<=num;i++){
a = a+str;
}
}
return a;
}
