//TODO Destructural assignment

const userProfile = {
  name: "Bogdan",
  age: 31,
  location: "The US",
  profession: "Software Engineer",
};

const { name, age, location, profession } = userProfile;

console.log(name); // Bogdan
console.log(age); // 31
console.log(location, profession); // The US Software Engineer
//By declaring new variables we assing the values of the object properties to them

// TODO Destructural assignment of arrays
const countries = ["Zimbabwe", "Singapore", "Liechtenstein"];
let [africa, asia, europe] = countries; // new variables declarement based on elements of the array
[asia, africa, europe] = countries; // The order is really matter. Now we have the index of the elements

console.log(africa, asia, europe); // Zimbabwe Singapore Liechtenstein

// TODO function destrucrture
const userInfo = ({ name, profession }) => {
  if (!profession) {
    return `User ${name}, we do not hire unemployed people.`;
  }
  return `User ${name} you are hired!`;
};

console.log(userInfo(userProfile));
