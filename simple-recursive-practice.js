// power function
function power(base, exp) {
  // base condition
  if (exp === 0) {
    return 1;
  }
  // different input
  return base * power(base, exp - 1);
}
console.log(power(2, 4));

// factorial function, factorial zero(0!) is always 1.
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(7));

// productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3, 10]));

// recursiveRange function which accepts a number and adds up
// all the numbers from 0 to the number passed to the function
function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(10));

// Fibonacci function
// Fibonacci sequence is the sequence of whole numbers which start 1,1
// and where ever number there after is equal to the sum of the previous two numbers
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(28));
