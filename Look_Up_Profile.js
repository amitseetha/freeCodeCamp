/*
LookUpProfile
We have an array of objects representing different people in our contacts lists.

A lookUpProfilefunction that takes nameand a property (prop) as arguments has been pre-written for you.

The function should check if nameis an actual contact's firstNameand the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If namedoes not correspond to any contacts then return "No such contact"

If propdoes not correspond to any valid properties of a contact found to match namethen return "No such property"
*/


var contacts = [
{
"firstName": "Akira",
"lastName": "Laine",
"number": "0543236543",
"likes": ["Pizza", "Coding", "Brownie Points"]
},
{
"firstName": "Harry",
"lastName": "Potter",
"number": "0994372684",
"likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
"firstName": "Sherlock",
"lastName": "Holmes",
"number": "0487345643",
"likes": ["Intriguing Cases", "Violin"]
},
{
"firstName": "Kristian",
"lastName": "Vos",
"number": "unknown",
"likes": ["JavaScript", "Gaming", "Foxes"]
}
];


function lookUpProfile(name, prop)
{
for(var i=0;i<contacts.length;i++){
if(contacts[i].firstName===name)
{if(contacts[i].hasOwnProperty(prop)===true){return contacts[i][prop];}
else {
return "No such property";}
}
}
return "No such contact";

}
