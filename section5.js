//TODO Mutations

// How to avoid mutation of the object

// 1st method
const Chinese = {
  HongKong: "Cantonese",
  Taiwan: "Mandarin",
  Shanghai: "Shanghainese",
};

const ChineseCopy = Object.assign({}, Chinese); // copy without mutation. "{}" is an empty object
ChineseCopy.HongKong = "Mandarin";

console.log(Chinese);
console.log(ChineseCopy);
// But this method is not recommended, because it doesn't work with nested objects.

// 2nd method
const Music = {
  pop: "The Weeknd",
  phonk: "Fluxxwave",
  rap: "Eminem",
};

const MusicCopy = { ...Music }; // "..." is a spread operator.
MusicCopy.pop = "Drake";

console.log(Music);
console.log(MusicCopy);
// This method doesn't work with nested objects neither.

// 3rd method
const book = {
  British: "Joan Rowling",
  Japanese: "Haruki Murakami",
  Chinese: "Mo Yan",
  Korean: {
    name: "Han Kang",
    book: "The Vegetarian",
  },
};

const bookCopy = JSON.parse(JSON.stringify(book)); // copy without mutation at all
bookCopy.Korean.name = "warrior";
bookCopy.British = "Stephen King";

console.log(book);
console.log(bookCopy);
