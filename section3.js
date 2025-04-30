//TODO Variables and Types

// console.log(myName); // ReferenceError, myName is not defined

let myName; // undefinded
console.log(myName);

myName = "Bogdan"; // Bogdan
console.log(myName);

// link types (objects)
const objectA = {
  a: 10,
  b: true,
};

objectA.a = false; // a =  false
objectA.c = "text content"; // new variable created

console.log(objectA);

//TODO primitive types are behaving like objects.
const myLocation = "Los Angeles"
console.log(myLocation.toUpperCase())
const spareLocation = new String("San Jose")
console.log(spareLocation)

//TODO there are 6 primitive types: boolean, number, string, null, undefined, symbol
// there is 1 link type: object

// JavaScript is a dynamically typed language, meaning that you don't have to specify the type of a variable when you declare it.

//TODO Rules to work with variables
// 1. Declare before usage
// 2. Try to use "const" as much as it possible
// 3. Inside of functions do not change the value of global variables
