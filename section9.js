// Logical operators

//TODO False values
false
0
''
undefined
null
NaN

Boolean(false) // false
Boolean(0) // false
Boolean('') // false
Boolean(undefined) // false
Boolean(null) // false
Boolean(NaN) // false

let isUndefined; // undefined
typeof isUndefined === 'undefined' // true

//TODO False of false
const isObject = {
  a: 10,
  b: true,
  c: "text content",
};

!!10 // true
!!0 // false
!! '' // false
!! 'what up?' // true
!!isObject // true

//TODO && operator

let a = 10;
let b = 'string';
console.log(a && b); // string. As far as both values are true, it returns the last one

a = undefined;
console.log(a && b); // undefined. As far as the first value is false, it doesn't matter what the next value is.

//TODO || operator
let x = 70;
let y = null;

console.log(x || y); // 70. As far as the first value is true, it returns the first true value

x = 0;
y = 'what up?';

console.log(x || y); // what up?. As far as the first value is false, it continues looking for true value, which is the 2nd one.]

console.log(a && b && x && y); // undefined. As far as at lease one value is false, it returns the value of the first false value
console.log(a || b || x || y); // string. Prints the first true existing value

