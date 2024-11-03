/**
 * Rewrite the following `greet` function as an arrow function
 */
const greet = (name) => `Hello ${name}`;

/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */
const sum = (a, b) => a + b;
// Your code here

/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
const square = (n) => Math.pow(n, 2);

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
const squares = (numbers) => numbers.map((n) => n * n);

module.exports = {
  greet,
  sum,
  square,
  squares,
};
