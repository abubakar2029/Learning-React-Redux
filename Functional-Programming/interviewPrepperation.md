# Currying

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions, each with only a single argument. 
In other words, instead of a function taking all arguments at one time, it takes the first one and returns a new function, which takes the second one and returns a new function, and so on, until all arguments have been fulfilled. This concept helps us create higher-order functions.

## Benefits of Currying

- It helps us to create a higher-order function
- It reduces the chances of errors in our functions by dividing them into multiple smaller functions, each handling one responsibility.

## Examples

### Example 1:

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

console.log(sum(1)(2)(3)); // 6

- We could even separate this sum(1)(2)(3) to understand it better:
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6


### Example 2:
function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        };
    }
}

console.log(calculateVolume(4)(5)(6));
