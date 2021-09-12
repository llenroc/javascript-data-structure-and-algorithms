// https://leetcode.com/problems/reverse-integer/

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
*/


// Solution Sameer 
// Check if number is negative or not
// Run loop till number is >= 10
    // Collect last digit by moduls by 10
    // reduce number by division of 10
  
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;
    if(x < 0) {
      isNegative = true;
      x = x * -1;
    }
    // Take moduls of 10 and collect the number till it reaches to last number 
    let str = "";
    while(x >= 10) {
        let digit = x % 10;
        str += digit;
        x = (x - digit) / 10;
    }
    
    str += x;
    str =  parseInt(str);
    if(isNegative && str > Math.pow(2,31)) {
      return 0;
    }
    if(!isNegative && str > Math.pow(2,31) - 1) {
      return 0;
    }
    return isNegative ? str * -1 : str ;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(10)); // 0
console.log(reverse(1534236469)); // 0
console.log("\n");


// Refined solution 
/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
  const isNegative = x < 0;
  const xStr = Math.abs(x).toString().split("");
  const xReverse = xStr.reverse().join("");
  const num = Number(xReverse);
  if(isNegative && num > Math.pow(2,31)) {
    return 0;
  }
  if(!isNegative && num > Math.pow(2,31)-1) {
    return 0;
  }
  return isNegative ? -num : num;
}

console.log(reverse1(123)); // 321
console.log(reverse1(-123)); // -321
console.log(reverse1(120)); // 21
console.log(reverse1(0)); // 0
console.log(reverse1(10)); // 0
console.log(reverse1(1534236469)); // 0