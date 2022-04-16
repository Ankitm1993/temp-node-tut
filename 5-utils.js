const sayHi = (names) => {
  console.log(`Hello there ${names}`);
};

// similar to ES6 syntax of exporting the module, like in React when we export the React Component , we have similar syntax like export default React Component Name;

module.exports = sayHi;

// console.log(sayHi);
