//TODO arrays
const myArray = [1, 2, 3]; // order of elements matters. Even if we declared a variable with const, we can still mutate the array.
const myArrayCopy = [1, 2, 3];
const myArrayAssigned = myArray;

const myArray2 = new Array(1, 2, 3);

console.log(myArray2); // [1, 2, 3]
console.log(myArray[1]); // 2. They only access to elements is by "[]"
// console.log(myArray.2) error

console.log(myArray === myArray2); // false
console.log(myArray === myArrayCopy); // false
console.log(myArray === myArrayAssigned); // true

// console.log(myArray.length = 7); // 7. 4 empty slots

//TODO methods of arrays
// push, pop, shift, unshift, forEach, map

//TODO push + pop
console.log(myArray.push(4, 5));
const removedElement = myArray.pop(); // removes the element and returns it
myArray.pop(); // removes the last element

console.log(myArray); // [1, 2, 3, 4]
console.log(removedElement); // 4

//TODO shift + unshift
myArray.unshift(0); // adds the element to the beginning of the array. It has the index of 0 now.

console.log(myArray); // [0, 1, 2, 3]

myArray.shift(); // removes the first element of the array.
console.log(myArray); // [1, 2, 3]

//TODO forEach
myArray.forEach(el => console.log(el * 2)); //el = element. Returns each element of the array multiplied by 2
const result = myArray.forEach(el => el * 2); // myArray returns unsdefined, as its function is to sort out elements

console.log(result); // undefined
console.log(myArray);

//TODO map
const mappedArray = myArray.map(el => el * 2); // the array has to be declared by new variable because map returns a new array
const callBackArray = myArray.map(el => {
  return el * 3;
});
const anonimousCallBackArray = myArray.map(function (el) {
  return el * 3;
});

console.log(mappedArray); // [2, 4, 6]
console.log(callBackArray); // [3, 6, 9]
console.log(anonimousCallBackArray); // [3, 6, 9]
