//TODO functional expressions

//TODO functional expressions and functional declarations
function myFn(a, b) {
  // functional declaration has a name
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

const anonymousFn = function (x, y) {
  // functional expression does not have its own name. Can be used only in the declared variable
  let z;
  x = x + 1;
  z = x + y;
  return z;
};

// TODO Arrow functions

const arrowFn = (europe, asia) => {
  // also does not have its own name
  let japan;
  asia = true;
  europe = false;
  japan = europe || asia;
  return japan;
};

setTimeout(() => {
  console.log("Delayed message");
}, 2000);

myFn(1, 2);
anonymousFn(5, 4);
arrowFn(true, false);

// TODO how to shorten arrow functions
(abc, cba) => a + b; //if there is only 1 expression in a function You may remove the {} and return. Implecit return

//TODO values by default
const defaultValueFn = (value, multiplier = 1) => {
  // "multiplier" already has value of 1 by default
  return value * multiplier;
};

defaultValueFn(3, 3);
defaultValueFn(3);

//TODO Implicit return of the object
const newPost = (post, addedAt = Date()) => ({ // "Date" is JavaScript function which returns current date and time while calling
    ...post,
    // addedPost: addedPost,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Chareles Duhigg'
}

newPost(firstPost)

//TODO explicit return of the object
const newPost2 = (post, addedAt = Date()) => {
    return { //now we are using "return"
        ...post,
        // addedPost: addedPost,
        addedAt,
    }
}

newPost2(firstPost)
