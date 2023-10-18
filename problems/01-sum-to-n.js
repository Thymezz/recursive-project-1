/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

/*
  input: integer
  output: integer or null

  base case: n === 0
  recursive step: n - 1

*/


function sumToN(n) {

  if (n < 0) return null;

  if (n === 0) return 0;
  console.log(n);
  let sum = n + sumToN(n - 1);
  console.log(n, sum -n, sum)
  return sum;

}

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
