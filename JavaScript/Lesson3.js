// Переменная let

// let a = 10

// a = 20

// let b

// b = false

// Переменная const

// const c = 15

//  c = 20 Нельзя присвоить новое значение!

// let myName

// console.log(myName)

// myName = 'JavusScriptus'

// console.log(myName)

// console.log(console.log(10))

// const myName = 'JavusScriptus'

// myName = ''

// console.log(myName)

// const a = 10

// const b 'abc'

// const objectA = {
//     a: 10,
//     b: true,
//     // c: 'abc'
// }

// const copyOfA = objectA

// copyOfA.a = 20

// copyOfA.c = 'abc'
// copyOfA.c = 'cba'
// "a" будет равняться 20 и в "copyOfA" и в "objectA". Всё потому-что это ссылочный тип

// practice

const peashooter = 1;

const repeater = 2;

const dave = 'Crazy';

const plants = {
  peashooter,
  repeater,
  dave,
};

const plantsCopy = plants

plantsCopy = {
  peashooter: 3,
  repeater: 7,
  dave: 'Super',
};

console.log(plants);

function g() {
  console.log('Hello World')
}

g()

g = 10

console.log