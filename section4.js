// Objects

const myCity = {
  name: "New York",
  population: 8419600,
  area: 468.9,
};

const alternativeOfMYCity = {
  //myCity
  area: 468.9,
  name: "New York",
  population: 8419600,
};
// Both objects are technically equal, because order of object in JS doesn't matter.

delete myCity.area; // "delete" operator removes the property from the object

myCity.name = "Los Angeles"; // name = Los Angeles

// Using dot notation You can access or create new properties in the object.

console.log(myCity);

// TODO Bracket notation
const myCity2 = {
  name: "Houston",
};
const myCity2Property = "population";
myCity2[myCity2Property] = 2000000; // myCity2[population] = 2000000

console.log(myCity2);

// Using bracket notation You can access or create new properties in the object. You can also use another variable as a property name.

// TODO Nested property
const myCountry = {
  name: "Finland",
  info: {
    isCold: true,
    isLandlocked: false,
  },
};

delete myCountry.info.isLandlocked; // delete property from the object

console.log(myCountry);

//TODO Object destructuring
const name = "Vladimir";
const age = 72;

const personStats = {
  name: name,
  age: age,
  isSick: true,
};

const shortenedPersonStats = {
  name, // shortened syntax. Is recommended to use in the beggining of the code
  age,
  isSick: true,
};

console.log(shortenedPersonStats);

//TODO window is a global object in the browser
// globalThis is a global object in Node.js. In modern WebBrosers, globalThis is also available.

const myObject = {
  greeting: function () {
    console.log("Hello!");
  },
};

myObject.greeting();

//TODO myCity.city - access to the property. If I will add (), the error will occur "city is not a function"
// myCity.city() - call the method]

//TODO JSON
JSON.stringify(myObject); // convertation to JSON
console.log(myObject); // { greeting: [Function: greeting] }

const myObjectStringified = JSON.stringify(myObject);
JSON.parse(myObjectStringified); // { greeting: "Hello!" } convertation to JavaScript

//TODO Mutation of the object
const Japanese = {
  kanji: "2200",
  hiragana: "46",
  katakana: "46",
};

const JapaneseCopy = Japanese; // copy by reference

JapaneseCopy.kanji = 4600;
JapaneseCopy.pronunciation = "Dakuten + Handakuten";

console.log(Japanese);

