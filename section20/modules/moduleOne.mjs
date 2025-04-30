const sum = (a, b) => a + b;

export default sum;

const myName = () => {
  console.log("Bogdan");
};

console.log(myName);

//TODO multiple export
const firstValue = 1;
const secondValue = "zwei";

export { firstValue, secondValue };

//TODO more practice
const divid = (a, b) => a / b;
const mult = (a, b) => a * b;

export { divid, mult };
