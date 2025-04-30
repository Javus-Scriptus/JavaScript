// 'use strict'

//TODO Scope

//TODO Types of scope
// 1. Global scope
// 2. Local scope
// 3. Block scope (variable declared inside "let" or "const")
// 4. Function scope

const g = 5;

function myFn() {
  function innerFn() {
    console.log(g);
  }
  innerFn(); // 5
}

myFn(); //undefined

//TODO Life cycle of the variables

let a;
let b; //1. Variable declaration

function scope() {
  let b; // 2. Variable declaration inside the function. New scope created
  a = true;
  b = 10; // 3. Variable value definition
  console.log(b); // 4. "b" has a value of 10 inside the function
}

scope(); // 5. 0Function call

console.log(a); // "a" has value "true" because we defined it in the LOCAL SCOPE, but it is accessible in the GLOBAL SCOPE. Literally we broke the law to change declaration of global variable
console.log(b); // "b" has value "undefined" because it is in the GLOBAL SCOPE. In the LOCAL SCOPE it was declared as an another variable.

// TODO Undeclared variables

function undeclaredVar() {
  x = null; // No error, the variable is automatically declared in the global scope. But in strict mode it will throw an error
  console.log(x); // null
}

undeclaredVar(); // null

//TODO Strict mode

// Using the string 'use strict' in the code enables strict mode, which helps to prevent unsafe actions.
