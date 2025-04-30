//TODO ... spread operator
const browser = {
  name: "chrome",
  version: 98.68,
  optimized: false,
};

const updatedBrowser = {
  ...browser,
  optimized: true, // value is rewritten. But if it would be above the spread operator, replace as the first value
};

console.table(updatedBrowser);

const megaBrowser = {
  ...browser,
  ...updatedBrowser,
};

console.table(megaBrowser); // combanation of objects
