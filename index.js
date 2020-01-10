const add = function(...numbers) {
    return numbers.reduce((acc, num) => acc + num);
  };
  
  const minus = function(a, b) {
    console.log(`${a} is being minused by ${b}`);
    return a - b;
  };
  
  const multiply = function(...numbers) {
    return numbers.reduce((acc, num) => acc * num);
  };
  
  const divide = function(a, b) {
    console.log(`${a} is being divided by ${b}`);
    return a / b;
  };
  
  const powOf = function(a, b) {
    console.log(`${a} to the power of ${b}`);
    return a ** b;
  };
  
  const math = {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide,
    powOf: powOf
  };
  
  module.exports = math;
  