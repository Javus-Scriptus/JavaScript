// Functions

// Не оптимизированный код:

let a = 5;
let b = 3;

let c;

c = a + b;
// console.log(c);

a = 8;
b = 12;

c = a + b;
// console.log(c);

// Оптимизированный код

let e = 5;
let g = 3;

function sum(e, g) {
    const s = e + g;
    // console.log(s);
}

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

myFn(10, 3)
// console.log(myFn);
console.dir(myFn) 

function bogdan() {}

bogdan()

// bogdan

const personeOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personeOne)
console.log(personeOne)

function printMyName() {
    console.log('Bogdan')
}

console.log('Start')

setTimeout(printMyName, 3000)