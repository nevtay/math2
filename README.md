# Math
A simple math library

## Install
```
npm install @nevtay/math_2
```


## Usage

### Import  
` const math = require('@nevtay/math_2')`

### Addition
` const addition = math.add(args1, args2[, ...args])`

### Subtraction
` const minus = math.minus(args1, arg2)`

### Multiplication
` const multiply = math.multiply(args1, arg2[, ...args])`

### Division
` const divide = math.divide(dividend, divisor)`

### Exponential
` const powOf = math.powOf(base, exponent)`

### Multiplier
To create a custom multiplier, store it as a variable  
Examples:  

` const double = math.multiplyBy(2) `  
` const triple = math.multiplyBy(3) `

To use your multiplier, simply call your variable with a number parameter   

` double(2) // returns 4 `  
` triple(2) // returns 6 `  

### Measure
A function that takes up to three parameters and multiplies them together  
Empty parameters will default to a value of 1

` const one = math.measure()()() // returns 1 `
` const area = math.measure(10)(2)() // returns 20 `
` const volume = math.measure(2)(4)(6) // returns 48 `  

