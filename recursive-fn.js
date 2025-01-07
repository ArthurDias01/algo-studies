// Question 1.
// Write two functions that finds the factorial of any number. One should use recursion and the other should use iteration.

function factorialRecursion(number) {
  if (number === 0) return 1;
  if (number === 1) return 1;
  if (number === 2) return 2;
  return number * factorialRecursion(number - 1);
}

function factorialIteration(number) {
  if (number === 0 || number === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
// performance.mark("start");
// let t0 = performance.now();
// console.log(factorialRecursion(5));
// let t1 = performance.now();
// console.log('Call to factorialRecursion took ' + (t1 - t0) + ' milliseconds.');
// performance.mark("start2");
// let t02 = performance.now();
// console.log(factorialIteration(5));
// let t12 = performance.now();
// console.log('Call to factorialIteration took ' + (t12 - t02) + ' milliseconds.');

// Question 2. 
// Given a number N, write a function that returns the Nth Fibonacci number.
// Fibonacci sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibonacciIterative(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;
  let previous = 0;
  let current = 1;
  for (let i = 2; i <= number; i++) {
    let temp = current;
    current = previous + current;
    previous = temp;
  }
  return current;
}

function fibonacciRecursion(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;
  return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}

console.log(fibonacciIterative(9));