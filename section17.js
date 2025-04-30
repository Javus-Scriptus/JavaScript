//TODO conditional instructions

const love = false;

if (love) {
  console.log("You are a true cupid!");
} else {
  console.log("Love is not for you ((");
}

// TODO using "if" in functions
const sumOfPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Please provide numbers only!";
  }

  if (a <= 0 || b <= 0) {
    return "Numbres are not positive";
  }

  return a + b;
};

console.log(sumOfPositiveNumbers(3, 1)); // 3

// TODO switch
switch (love) {
  case true:
    console.log("You are a true cupid!");
    break; // instruction which helps to stop the execution of the code if switch found the match
  case false:
    console.log("Love is not for you ((");
    break;
  default:
    console.log("Are you a lover?");
}


