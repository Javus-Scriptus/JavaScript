const a = 10;

let b = a;
// 10 "а" не меняет значение, так-как "b" просто скопировал значение "a" в "b"
 
b = 30;
// 30 

// console.log(b)


// Мутирование объекта

const person = {
    name: 'Bob',
    age: 21
}

person.age = 22;
person.isAdult = true;

console.log(person.age) //22;
console.log(person.isAdult) //true;
//isAdult не сещуствует, но мы можем спокойно добавить новые значения, так как объект хранит только ссылку на значение. Это называеться "мутация объекта"

// const person2 = person
const person2 = { ...person }
// Оператор троеточие "..." объект на свойства

// const person2 = Object.assign({}, person);

// assign избегает мутирования объекта
//Копирование ссылки (copy by reference)

person2.age = 26;
person.isAdult = true;

console.log(person.isAdult);


