/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.


convertToRoman(2)should return "II".
Passed
convertToRoman(3)should return "III".
Passed
convertToRoman(4)should return "IV".
Passed
convertToRoman(5)should return "V".
Passed
convertToRoman(9)should return "IX".
Passed
convertToRoman(12)should return "XII".
Passed
convertToRoman(16)should return "XVI".
Passed
convertToRoman(29)should return "XXIX".
Passed
convertToRoman(44)should return "XLIV".
Passed
convertToRoman(45)should return "XLV"
Passed
convertToRoman(68)should return "LXVIII"
Passed
convertToRoman(83)should return "LXXXIII"
Passed
convertToRoman(97)should return "XCVII"
Passed
convertToRoman(99)should return "XCIX"
Passed
convertToRoman(400)should return "CD"
Passed
convertToRoman(500)should return "D"
Passed
convertToRoman(501)should return "DI"
Passed
convertToRoman(649)should return "DCXLIX"
Passed
convertToRoman(798)should return "DCCXCVIII"
Passed
convertToRoman(891)should return "DCCCXCI"
Passed
convertToRoman(1000)should return "M"
Passed
convertToRoman(1004)should return "MIV"
Passed
convertToRoman(1006)should return "MVI"
Passed
convertToRoman(1023)should return "MXXIII"
Passed
convertToRoman(2014)should return "MMXIV"
Passed
convertToRoman(3999)should return "MMMCMXCIX"
*/

//This code needs to be refactored. Snippet to convert numbers 1-99 is repeating every time.
function convertToRoman(num) {
var arr=[];
var m = Math.floor(num/1000);
for(let i=0;i<m;i++){ //how many thousands
arr.push("M");
}
var remainderM = num%1000;
if(remainderM>=900){ //remainderM more than 900
arr.push("CM");
var remainder900 = remainderM % 900;
if (remainder900 >=90){
arr.push("XC");
var remainder90= remainder900%90;
if(remainder90>5){
var remainder5= remainder90%5;
if(remainder5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainder5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder90==5){
arr.push("V");
return arr.join("");
}
else if(remainder90==4){
arr.push("IV");
return arr.join("");
}
else if(remainder90>0){
for (let i=0;i<remainder90;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder900>=50){
arr.push("L");
var remainder50= remainder900%50;
var tens=Math.floor(remainder50/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
var remainder10=remainder50%10;

if(remainder10>5){
var remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder900>=40){
arr.push("XL");

var remainder40= remainder900%40;
if(remainder40>5){
var remainderForty5= remainder40%5;
if(remainderForty5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderForty5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder40==5){
arr.push("V");
return arr.join("");
}
else if(remainder40==4){
arr.push("IV");
return arr.join("");
}
else if(remainder40>0){
for (let i=0;i<remainder40;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder900>0){



tens=Math.floor(remainder900/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder900%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else {
return arr.join("");
}
}
else{
if(remainderM>=500){ //remainderM more than 500
arr.push("D");
var remainder500=remainderM%500;
for (let i=0;i<Math.floor(remainder500/100);i++){
arr.push("C");
}



var remainder100 = remainder500 % 100;
if (remainder100 >=90){
arr.push("XC");
remainder90= remainder100%90;
if(remainder90>5){
remainder5= remainder90%5;
if(remainder5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainder5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder90==5){
arr.push("V");
return arr.join("");
}
else if(remainder90==4){
arr.push("IV");
return arr.join("");
}
else if(remainder90>0){
for (let i=0;i<remainder90;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder100>=50){
arr.push("L");
remainder50= remainder100%50;
tens=Math.floor(remainder50/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder50%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder100>=40){
arr.push("XL");

remainder40= remainder100%40;
if(remainder40>5){
remainderForty5= remainder40%5;
if(remainderForty5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderForty5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder40==5){
arr.push("V");
return arr.join("");
}
else if(remainder40==4){
arr.push("IV");
return arr.join("");
}
else if(remainder40>0){
for (let i=0;i<remainder40;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder100>0){



tens=Math.floor(remainder100/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder100%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else {
return arr.join("");
}
}
else if(remainderM>=400){ //remainderM more than 400
arr.push("CD");

var remainder400 = remainderM % 100;
if (remainder400 >=90){
arr.push("XC");
remainder90= remainder100%90;
if(remainder90>5){
remainder5= remainder90%5;
if(remainder5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainder5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder90==5){
arr.push("V");
return arr.join("");
}
else if(remainder90==4){
arr.push("IV");
return arr.join("");
}
else if(remainder90>0){
for (let i=0;i<remainder90;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder400>=50){
arr.push("L");
remainder50= remainder400%50;
tens=Math.floor(remainder50/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder50%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder400>=40){
arr.push("XL");

remainder40= remainder400%40;
if(remainder40>5){
remainderForty5= remainder40%5;
if(remainderForty5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderForty5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder40==5){
arr.push("V");
return arr.join("");
}
else if(remainder40==4){
arr.push("IV");
return arr.join("");
}
else if(remainder40>0){
for (let i=0;i<remainder40;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder400>0){

tens=Math.floor(remainder400/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder400%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else {
return arr.join("");
}
}
else if (remainderM>0){ //remainderM less than 400





for (let i=0;i<Math.floor(remainderM/100);i++){
arr.push("C");
}



remainder100 = remainderM % 100;
if (remainder100 >=90){
arr.push("XC");
remainder90= remainder100%90;
if(remainder90>5){
remainder5= remainder90%5;
if(remainder5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainder5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder90==5){
arr.push("V");
return arr.join("");
}
else if(remainder90==4){
arr.push("IV");
return arr.join("");
}
else if(remainder90>0){
for (let i=0;i<remainder90;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder100>=50){
arr.push("L");
remainder50= remainder100%50;
tens=Math.floor(remainder50/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder50%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder100>=40){
arr.push("XL");

remainder40= remainder100%40;
if(remainder40>5){
remainderForty5= remainder40%5;
if(remainderForty5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderForty5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder40==5){
arr.push("V");
return arr.join("");
}
else if(remainder40==4){
arr.push("IV");
return arr.join("");
}
else if(remainder40>0){
for (let i=0;i<remainder40;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else if(remainder100>0){

tens=Math.floor(remainder100/10);
for(let i=0;i<tens;i++){
arr.push("X");
}
remainder10=remainder100%10;

if(remainder10>5){
remainderTen5= remainder10%5;
if(remainderTen5==4){
arr.push("IX");
return arr.join("");
}
else {
arr.push("V");
for (let i=0;i<remainderTen5;i++){
arr.push("I");
}
return arr.join("");
}
}
else if(remainder10==5){
arr.push("V");
return arr.join("");
}
else if(remainder10==4){
arr.push("IV");
return arr.join("");
}
else if(remainder10>0){
for (let i=0;i<remainder10;i++){
arr.push("I");
}
return arr.join("");
}
else {
return arr.join("");
}
}
else {
return arr.join("");
}
}
else {
return arr.join(""); //remainderM is 0
}
}
}

convertToRoman(36);
