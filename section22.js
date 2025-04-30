//TODO promises
// Promises allow you to handle events that are delayed in time. The respond comes asynchronously
// Promise literally promises to provide the result later
// Promise can return an error in case if the result is impossible to provide
// Promise states: pending; executed; rejected

const myPromise = new Promise((resolve, reject) => {
  //execution of asynchronouse actions
  //inside of the function it is needed to call on of these functions: "resolve" or "reject"
  //this promise is in pending state
});

//TODO receiving a result from promise
myPromise
  .then(value => {
    // .then requires also a function as an argument
    // actions in case of successful promise resolve
  })
  .catch(error => {
    // .catch also requires a function as an argument
    // actions in case of rejection
    //"error" value is the value of the promise in call of function "rejecct" inside of the promise
  });

//TODO receiving data with "fetch API"
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    console.log(response);
    return response.json;
  })
  //   .then(response => response.json()) //if the promise is resolved
  .then(json => console.log(json)) // JSON method return promise. Is it need time to parse javascript object etc.
  .catch(error => console.error(error));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));
//.catch(error => console.log(error.message))

//TODO some more pormises
const getData = url => //The promise return implisicty because no {}
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error)),
  );

getData("https://jsonplaceholder.typicode.com/todos")
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
