// TODO Teranary operator
// Condition ? Expression 1 : Expresssion 2
// Ternary operator functions like ||

const value = 13;

value
  ? console.log("The condition is true")
  : console.log("The condition is false");

const myName = "Boris";
const myAge = "35";

// myName && myAge ? myFunctionName(myName, myAge) : myFunctionAge();

let numValue = 11;
console.log(numValue >= 0 ? numValue : -numValue); //11

numValue = -5;
const result = numValue >= 0 ? numValue : -numValue;
console.log(result);
