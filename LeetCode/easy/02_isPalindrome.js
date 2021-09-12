// https://leetcode.com/problems/palindrome-number/
// 9. Palindrome Number

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false

** Follow up: Could you solve it without converting the integer to a string?

*/

/**
 * @param {number} x
 * @return {boolean}
 */

// Solution with converting to str
var isPalindrome1 = function(x) {
    if(x < 0) {
      return false;
    }

    if(x > Math.pow(2, 31) - 1) {
      return false;
    }

    const xStr = Math.abs(x).toString().split("");
    const xStrReverse = xStr.reverse().join("");
    const num = Number(xStrReverse);
    return x == num;
};

// console.log(isPalindrome1(121)); // true
// console.log(isPalindrome1(-121)); // false
// console.log(isPalindrome1(10)); // false
// console.log(isPalindrome1(-101)); // false


// Solution without converting to str
var isPalindrome = function(x) {
    // Special cases:
    // As discussed above, when x < 0, x is not a palindrome.
    // Also if the last digit of the number is 0, in order to be a palindrome,
    // the first digit of the number also needs to be 0.
    // Only 0 satisfy this property.
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    if(x > Math.pow(2, 31) - 1) {
      return false;
    }
    const xClone = x;
    let revertedNumber = 0;
    while(x >= 10) {
        let digit = x % 10;
        revertedNumber = revertedNumber * 10 + digit;
        x = (x - digit) / 10;
    }
    // Will have to add last digit to reverted number
    revertedNumber = revertedNumber * 10 + x ;
    return xClone == revertedNumber;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(11)); // true
console.log("\n")