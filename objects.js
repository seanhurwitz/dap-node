const { curry } = require("ramda");

const add = curry((num1, num2) => {
  console.log(`num1+num2`, num1 + num2);
});

add(1, 2);
add(1)(2);
add(3, 4);
