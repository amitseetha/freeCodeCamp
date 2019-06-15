/*
Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities

convertHTML("Dolce & Gabbana")should return Dolce &amp; Gabbana.
Passed
convertHTML("Hamburgers < Pizza < Tacos")should return Hamburgers &lt; Pizza &lt; Tacos.
Passed
convertHTML("Sixty > twelve")should return Sixty &gt; twelve.
Passed
convertHTML('Stuff in "quotation marks"')should return Stuff in &quot;quotation marks&quot;.
Passed
convertHTML("Schindler's List")should return Schindler&apos;s List.
Passed
convertHTML("<>")should return &lt;&gt;.
Passed
convertHTML("abc")should return abc.
*/

function convertHTML(str) {
var k=[];
var ptr;
for (let i=0;i<str.length;i++){
switch(str[i]){
case "&":
k=["&","a","m","p",";"];
break;
case "<":
k=["&","l","t",";"];
break;
case ">":
k=["&","g","t",";"];
break;
case '"':
k=["&","q","u","o","t",";"];
break;
case "'":
k=["&","a","p","o","s",";"];
break;
}
ptr=str[i].replace(/[&<>"']/,k.join(''));
str=str.slice(0,i)+ptr+str.slice(i+1);
}
return str;
}
