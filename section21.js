//TODO classes
class Comment {
  //name of class is written in Pascal case
  constructor(text) {
    //constructor function
    this.text = text; //"this" variable indicates to exeplar of the "text" class
    this.votesQty = 0;
  }

  upvote() {
    //upvote funtion
    this.votesQty += 1; //"+=" operator shortens "this.voteQty = this.voteQty ++" expression
    // does not have "return", so return undefined
  }

  static mergeComents(first, second) {
    return `${first} ${second}`;
  }
}

console.log(Comment);

console.log(Comment.prototype);
console.log(Comment.prototype.constructor);
console.log(Comment.prototype.constructor === Comment); //true

//TODO creation of new exeplar
//Exemplar always inherits all of its parent's values
const firstComment = new Comment("First comment"); // "new" calls new constructor function. This constrduction returns a new object

console.log(firstComment);

//TODO Chain prototype inherition
// firstComment -> Commetn -> Object // "firstComment" is and expemplar of 'Comment' (class). "Comment" inherits all of object's value

//TODO verification of ownership
console.log(firstComment instanceof Comment); //true
console.log(firstComment instanceof Object); //true

//TODO method call
firstComment.upvote(); //increases the value by 1
console.log(firstComment.votesQty);
firstComment.upvote(); //increases the value again by 1
console.log(firstComment.votesQty);
//you can call methods reapeadetly

//TODO verification of ownership of properties of the object
console.log(firstComment.hasOwnProperty("text")); // true
console.log(firstComment.hasOwnProperty("votesQty")); // true
console.log(firstComment.hasOwnProperty("upvote")); // false, is not own propery. It inheritits from a the parent class "Comment"
console.log(firstComment.hasOwnProperty("hasOwnProperty")); // false, is not own propery. It inheritits from a the parent class "Comment"

//TODO creation of several exemplars
const secondComment = new Comment("Second comment");
const thirdComment = new Comment("Third comment");
const fourthComment = new Comment("Fourth comment");

secondComment.upvote();
console.log(secondComment.votesQty);
thirdComment.upvote();
console.log(thirdComment.votesQty);
fourthComment.upvote();
console.log(fourthComment.votesQty);
fourthComment.upvote();
console.log(fourthComment.votesQty);

//TODO static mehtod
Comment.mergeComments("First comment", "Second comment"); // The method is avalible as aproperty of a class and does not inherit exemplars of the class.
// It is available for the "Comment" but not for its exemplars.

//TODO Exstention of other classes
class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0); //"Accumulator" is going to increase while additiong "element". The default value is 0
  }
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray);
console.log(myArray.sum());

//The created chain of prototypes: myArray -> NumbersArray -> Array -> Object

//TODO prototypes
// Comment.prototype === firstComment.__proto__; // __proto__ is a hidden property
