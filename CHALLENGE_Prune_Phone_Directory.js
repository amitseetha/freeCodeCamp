/*
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555

(555)555-5555

(555) 555-5555

555 555 5555

5555555555

1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return trueif the string is a valid US phone number; otherwise return false

telephoneCheck("555-555-5555")should return a boolean.
Passed
telephoneCheck("1 555-555-5555")should return true.
Passed
telephoneCheck("1 (555) 555-5555")should return true.
Passed
telephoneCheck("5555555555")should return true.
Passed
telephoneCheck("555-555-5555")should return true.
Passed
telephoneCheck("(555)555-5555")should return true.
Passed
telephoneCheck("1(555)555-5555")should return true.
Passed
telephoneCheck("555-5555")should return false.
Passed
telephoneCheck("5555555")should return false.
Passed
telephoneCheck("1 555)555-5555")should return false.
Passed
telephoneCheck("1 555 555 5555")should return true.
Passed
telephoneCheck("1 456 789 4444")should return true.
Passed
telephoneCheck("123**&!!asdf#")should return false.
Passed
telephoneCheck("55555555")should return false.
Passed
telephoneCheck("(6054756961)")should return false
Passed
telephoneCheck("2 (757) 622-7382")should return false.
Passed
telephoneCheck("0 (757) 622-7382")should return false.
Passed
telephoneCheck("-1 (757) 622-7382")should return false
Passed
telephoneCheck("2 757 622-7382")should return false.
Passed
telephoneCheck("10 (757) 622-7382")should return false.
Passed
telephoneCheck("27576227382")should return false.
Passed
telephoneCheck("(275)76227382")should return false.
Passed
telephoneCheck("2(757)6227382")should return false.
Passed
telephoneCheck("2(757)622-7382")should return false.
Passed
telephoneCheck("555)-555-5555")should return false.
Passed
telephoneCheck("(555-555-5555")should return false.
Passed
telephoneCheck("(555)5(55?)-5555")should return false.

Steps:
1. if str contains anything apart from number, (,),-,space, return false
2. if there are 11 numbers and leftmost is not 1 - return false
3. numbers must be 10 or 11 else return false
4. number of open brackets should be equal to number of close brackets
5. brackets can't be on last 6 numbers
6. Can't start with hypen
*/

function telephoneCheck(str) {

//only number, space, hypen, brackets allowed
if((/[^\s\d()-]/).test(str)==true){
return false;
}

//if number of digits is 11, then first digit should be 1
if(str.match(/\d/g).length==11){
if(str.match(/\d/g)[0]!=1){
return false;
}
}

//can be only 10 or 11 digits
if(str.match(/\d/g).length!=11 && str.match(/\d/g).length!=10){
return false;
}

//number of open brackets = close brackets - making two functions
function countRoundLeft (str){
let array = str.split('');
for(let i=0;i<array.length;i++){
if(array.indexOf('(')==-1){
return i;
}
array.splice(0,array.indexOf('(')+1);
}
}

function countRoundRight (str){
let array = str.split('');
for(let i=0;i<array.length;i++){
if(array.indexOf(')')==-1){
return i;
}
array.splice(0,array.indexOf(')')+1);
}
}
if(countRoundLeft(str)!=countRoundRight(str)){
return false;
}

//Can't start with hyphen
if((/^-/).test(str)==true){
return false;
}
return true;
}

console.log(telephoneCheck("(555-5((5)5-5555"));
