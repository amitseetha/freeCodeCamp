/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Object.keys(bob).lengthshould return 6.
Passed
bob instanceof Personshould return true.
Passed
bob.firstNameshould return undefined.
Passed
bob.lastNameshould return undefined.
Passed
bob.getFirstName()should return "Bob".
Passed
bob.getLastName()should return "Ross".
Passed
bob.getFullName()should return "Bob Ross".
Passed
bob.getFullName()should return "Haskell Ross" after bob.setFirstName("Haskell").
Passed
bob.getFullName()should return "Haskell Curry" after bob.setLastName("Curry").
Passed
bob.getFullName()should return "Haskell Curry" after bob.setFullName("Haskell Curry").
Passed
bob.getFirstName()should return "Haskell" after bob.setFullName("Haskell Curry").
Passed
bob.getLastName()should return "Curry" after bob.setFullName("Haskell Curry").
*/

var Person = function(firstAndLast) {
// Complete the method below and implement the others similarly
let firstname=firstAndLast.split(" ")[0];
let lastname=firstAndLast.split(" ")[1];
//Setter for Full Name
this.setFullName = function(firstAndLast) {
firstname=firstAndLast.split(" ")[0];
lastname=firstAndLast.split(" ")[1];
}

//Setter for First Name
this.setFirstName = function(first) {
firstname=first;
}

//Setter for Last Name
this.setLastName = function(last) {
lastname=last;
}

//Getter for Full Name
this.getFullName = function() {
return firstname +" "+ lastname;
}

//Getter for First Name
this.getFirstName = function() {
return firstname;
}

//Getter for Last Name
this.getLastName = function() {
return lastname;
}
}

var bob = new Person('Bob Ross');
console.log(Object.keys(bob));
