const add = function(a, b) {
    console.log(`${a} is being added to ${b}`);
    return a + b;
}

const minus = function(a, b) {
    console.log(`${a} is being minused by ${b}`);
    return a - b;
}

const multiply = function(a, b) {
    console.log(`${a} is being multiplied by ${b}`);
    return a * b;
}

const divide = function(a, b) {
    console.log(`${a} is being divided by ${b}`);
    return a / b;
}

const math = {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide
}

module.exports = math;