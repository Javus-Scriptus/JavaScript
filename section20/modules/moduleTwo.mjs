import importedSum from "./moduleOne.mjs"; // the variable can have different name
import { firstValue, secondValue as two } from "./moduleOne.mjs";
import  { divid, mult as importedMult } from './moduleOne.mjs' // the result is still correct

//TODO default export
console.log(importedSum);

const result1 = importedSum(10, 2);
console.log(result1);

const result2 = importedSum(5, 10);
console.log(result2);

// console.log(myName)

// const myName = 'Bogi, Bogi'
// console.log(myName)

//TODO multiple export
console.log(firstValue);
console.log(two);

//TODO export
console.log(divid(10, 2))
console.log(importedMult(3, 3))