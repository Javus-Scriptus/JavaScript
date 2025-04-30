//TODO Funcitons

let a = 5;
let b = 7;

let c;

c = a + b;
console.log(c); //12

a = 8;
b = 3;

c = a + b;

console.log(c); //11

//TODO Using function we can shorten the code

a = 5;
b = 5;

function sum(a, b) {
  const c = a + b;
  console.log(c);
}

sum(a, b); //10

a = 1;
b = 2;

sum(a, b); //3

//TODO Funtion can be
// named;
// anonymous;
// declared by variable;
// argument while called another function;
// value of property (method) of object;

function myFn(x, y) {
  let z;
  x = x + 1;
  z = x + y;
  return z;
}

myFn(3, 3);

const personZero = {
  name: "Bob",
  age: 30,
};

function increasementAge(person) {
  person.age += 1;
  return person;
}

increasementAge(personZero); // Mutation of the object using function. Is not reccomended to mutate with a function
console.log(personZero.age);

//TODO How to avoid mutation with a function

const personOne = {
  name: "Alex",
  age: 21,
};

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person); ;
  updatedPerson.age += 1; // Avoid mutation
  return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age); //21. The value of the constant "personOne" is not changed
console.log(updatedPersonOne.age); //22

//TODO Callback funtions

function executiveFn() {

}

function callbackFn(callback) { // Inside of this function we can use the callback function
  callback();
}

callbackFn(executiveFn) // Now we can call another funcion inside of this function
console.log(callbackFn); // [Function: callbackFn]

// Examples

function print() {
  console.log('Finish')
}

console.log('Start')

setTimeout(print, 2000)   

//TODO Rules to work with "Callback Functions"
// 1. Sensefull name
// 2. 1 funtion must execute 1 tast
// 3. Not recommended to change outer variables relative to the function "Purer function"




