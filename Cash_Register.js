/*Design a cash register drawer function checkCashRegister()that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. 
cidis a 2D array listing available currency. 
The checkCashRegister()function should always return an object with a statuskey and a changekey. 
Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change. 
Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key changeif it is equal to the change due. 
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey. 
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. 

| CurrencyUnit        | Amount             |
|---------------------|--------------------|
| Penny               | $0.01 (PENNY)      |
| Nickel              | $0.05 (NICKEL)     |
| Dime                | $0.1 (DIME)        |
| Quarter             | $0.25 (QUARTER)    |
| Dollar              | $1 (DOLLAR)        |
| Five Dollars        | $5 (FIVE)          |
| Ten Dollars         | $10 (TEN)          |
| Twenty Dollars      | $20 (TWENTY)       |
| One Hundred Dollars | $100 (ONE HUNDRED) | 

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return an object. 
Passed
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["QUARTER", 0.5]]}. 
Passed
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}. 
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "INSUFFICIENT_FUNDS", change: []}. 
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "INSUFFICIENT_FUNDS", change: []}. 
Passed
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}. 


1. Write a function to say true if you can't return a change. See Below.
2. Declare variables status and change Array with keys same as cid and values =0.
3. set up logic for change due and then logic for values for change object key values
4. Set up logic for status based on cid, change due
5. If status is closed, change object is same as cid
6. If status is insufficient funds, delete all keys in change object
7. In change object, delete a key if its value is zero, if status is open.
8. Declare an object with status and change as keys and return it.

changeamount = Cash - Price
Change = Change/100[100] + (Change%100)/20[20] + ((Change%100)%20)/10[10] + (((Change%100)%20)%10)/5[5] + ((Change%100)%20)%10)%5)/1[1] + (((Change%100)%20)%10)%5)%1)/.25[quarter] + ((((Change%100)%20)%10)%5)%1)%.25)/.1[dime] + (((((Change%100)%20)%10)%5)%1)%.25)% .1)/.05[nickel] + ((((((Change%100)%20)%10)%5)%1)%.25)% .1)%.05)/.01[penny]//This is as needed. Available can be lower than this in which case lower will be taken and remainder passed on to lower currency. If pennies fail at the end => Insufficient Funds


Total money value in cid = sum of all (first check for insufficient funds)
function determineStatus(price,cash,cid){
if total money in cid = changeamount and determinechange doesn't output undefined. => Closed
if changeamount> total value or determineChange outputs undefined => Insufficient funds
if determineChange outputs a value and chageamount is less than cid total value
*/
function checkCashRegister(price, cash, cid) {
var changeamount = (cash-price)*100;
cid=cid.map(function(e){e[1]=e[1]*100; return e;});

//Determine value of register
function drawerValue(cid){
let sum =0;
for (let i=0;i<cid.length;i++){
sum = sum + cid[i][1];
}
return sum;
}
//Determine change in all scenarios
function determineChange(changeamount,cid){
var change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
if (changeamount>drawerValue(cid)){
change=[];
return change;
}

if(changeamount==drawerValue(cid)){
return cid;
}

change[8][1]= Math.floor((changeamount/10000))*10000;
change[7][1]= Math.floor((changeamount%10000)/2000)*2000;
change[6][1]= Math.floor(((changeamount%10000)%2000)/1000)*1000;
change[5][1]= Math.floor((((changeamount%10000)%2000)%1000)/500)*500;
change[4][1]= Math.floor(((((changeamount%10000)%2000)%1000)%500)/100)*100;
change[3][1]= Math.floor((((((changeamount%10000)%2000)%1000)%500)%100)/25)*25;
change[2][1]= Math.floor(((((((changeamount%10000)%2000)%1000)%500)%100)%25)/10)*10;
change[1][1]= Math.floor((((((((changeamount%10000)%2000)%1000)%500)%100)%25)%10)/5)*5;
change[0][1]= Math.floor(((((((((changeamount%10000)%2000)%1000)%500)%100)%25)%10)%5)/1)*1;

for (let i=8;i>0;i--){
if(change[i][1]>cid[i][1]){
change [i-1][1]=change[i-1][1]+change[i][1]-cid[i][1];
change[i][1]=cid[i][1];
}
}
if(change[0][1]>cid[0][1]){
change=[]
return change;
}

change = change.filter((e)=>e[1]!=0);//removing blank items
//reverse order of items to higher to lower as required
var k = [0,0];
for (let i=0;i<Math.floor(change.length/2);i++){
k= change[i];
change[i]=change[change.length-i-1];
change[change.length-i-1]=k;
}

return change;
}
//Determine Status
function determineStatus(changeamount,cid){
var status ="sd";
if (determineChange(changeamount,cid).length==0){
status="INSUFFICIENT_FUNDS"
}
else if(drawerValue(cid)==changeamount){
status="CLOSED"
}
else status="OPEN"
return status;
}
//Assemble and return final object
var final = {"status":determineStatus(changeamount,cid),"change":determineChange(changeamount,cid).map(function(e){e[1]=e[1]/100; return e;})}

return final;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
