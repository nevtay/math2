const assert = require("assert");

const add = function(...numbers) {
    return numbers.reduce((acc, num) => acc + num);
  };
  
  const minus = function(a, b) {
    return a - b;
  };
  
  const multiply = function(...numbers) {
    return numbers.reduce((acc, num) => acc * num);
  };
  
  const divide = function(dividend, divisor) {
    if (divisor === 0) {
      throw new Error(`Divisor cannot equal 0.`);
    } else {
      if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        throw new Error(`Parameters must be a valid number.`)
    } else {
      return dividend / divisor;
    }
  }
};
  
  const powOf = function(base, exponent) {
    console.log(`${base} is being raised to the power of ${exponent}`);
    return base ** exponent;
  };

  // add multiplyBy function here
  function multiplyBy(num1) {
    return function(num2) {
      return num1 * num2;
    }
  }
  
  const measure = function(length = 1) {
    return function(width = 1) {
      return function(height = 1) {
        return length * width * height;
      }
    }
  }

  console.log(measure()()());

  const math = {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide,
    powOf: powOf,
    multiplyBy: multiplyBy,
    measure: measure
  };
  
  module.exports = math;

  assert.strictEqual((add(1, 2, 3, 4, 5)), 15)
  console.log(`Addition function worked as expected`);
  assert.strictEqual((minus(8, 4)), 4)
  console.log(`Minus function worked as expected`);
  assert.strictEqual((multiply(2, 2, 2)), 8)
  console.log(`Multiply function worked as expected`);
  assert.strictEqual((divide(8, 2)), 4);
  console.log(`Divide function worked as expected`);
  assert.strictEqual((powOf(2, 3)), 8)
  console.log(`Power function worked as expected`);
  assert.strictEqual((multiplyBy(10)(2)), 20);
  console.log(`MultiplyBy function worked as expected!`);
  assert.strictEqual(measure(2)(2)(2), 8);
  assert.strictEqual(measure(2)()(2), 4);
  assert.strictEqual(measure()()(), 1);
  console.log(`Measure functions worked as expected!`);
  console.log(`All tests passed!`);