//TODO Cycles
// Types of cycles: for; for...in; while, do...while; for...of

//TODO for cycle
// for (Starting instruction; Condition, iterative action)

let selfExpansion = 0
console.log(selfExpansion);
selfExpansion++
console.log(selfExpansion);
selfExpansion++
console.log(selfExpansion);
selfExpansion++
console.log(selfExpansion);
selfExpansion++
console.log(selfExpansion);
selfExpansion++

for (let cycleExpansion = 0; cycleExpansion < 5; cycleExpansion++) {
    console.log(cycleExpansion) // 0, 1, 2, 3, 4, undefined
}
    
//TODO for for arrays
const forArray = ['text1', 'text3', 'text3'];

for (let i = 0; i < forArray.length; i++) {
    console.log(forArray[i]) //
}

// TODO forEach for arrays
const newArray = ['first', 'second', 'third'];
newArray.forEach((element, index) => {
    console.log(element, index)
})

//TODO while

let variable = 0;

while (variable < 5) {
    console.log(variable)
    variable++ //prevents endless cycle execution
}

//TODO do...while
let xy =  0

do { //executes the code at least once
    console.log(xy)
    xy++
} while (xy < 5)

//TODO for...in
const myObject = {
    x: 10,
    y: true,
    z: 'some text',
}

for (const key in myObject) {
  console.log(key, myObject[key]); // prints parameters and their values
}

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key]) // prints parameters and their values
})

Object.values(myObject).forEach(value => {
    console.log(value) //prints only values
})

// Object.keys({}) Creates an empty array

const array = [true, 10, 'text', null] // is not reccomended to sort value of the array by cycles. Arrays have their own methods

for (const key in array) {
    console.log(array[key])
}

//TODO for...of
const myString = 'Hi'

for (const letter of myString) {
    console.log(letter) //prints a list of every letter of the string
}

const forofArray = [true, 10, 'yikes', null]

for (const element of forofArray) {
    console.log(element) //prints list of elements of the array
}

forofArray.forEach(element => {
    console.log(element) //This method is much more prioritized
})

let forofObject = {
    a: 'name',
    b: 'age',
    c: 'location',
}

for (const property of forofObject) {
  console.log(property); // TypeError: forofObject is not iterable. As far as order of elements in an object does not matter, object is not itarable
}

