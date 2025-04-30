//TODO Solving issues
const FnWithError = () => {
  throw new Error("This is an error");
};

// FnWithError();

try {
  FnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
} // We will see the "Continue?" even if there is an error

console.log("Continue?");
