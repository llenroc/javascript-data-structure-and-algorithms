console.log("Google Interview Exercise");

/*
Problem statement 

- Collections of numbers 
- Find matching pair which is equal to a perticular sum 

Eg1 -> [ 1,2,3,9] Sum = 8
Eg2 -> [ 1,2,4,4] Sum = 8

*/

/*

Question asked by the candidate

1. Looking for a pair of numbers to particular sum
  - For example in Eg1 there is no pair matching to sum 8
  - Eg2 there is pair like 4,4

    Eg1 -> [ 1,2,3,9] Sum = 8.  => No
    Eg2 -> [ 1,2,4,4] Sum = 8.  => Yes

2. How are these numbers are given like I assume in memory like array or something 
  - Yes you can asuume it is in memory
  - it is an array
  - Numbers are in ASCENDING order

3. Will there be repeated number or can I assume the same number as if input is [ 1,2,4 ], do I have to consider that 4 + 4  = 8

  - Number can be repeated 
  - But can not be considerd one number twice 

4. Hoe are these numbers like are they
  1. Integer
  2. Floating points
  3. -ve numbers 

  - You can consider these numbers are Integer 
  - Could be -ve as well.

*/

/*

Solution suggested by candidate

1. Nested for loop -> compare each and every possible pair 
    - Not effiecient and more time consuming solution 
    - Time complexity - > Big O = O(n^2)
2. Take each number one by one and search the other portion on array with binay search

  Eg; [ 1,2,3,9]
  For i = 0 , Number = 1, Binary search for 8-1 = 7 in rest of the array.

  - It will be better than 1st solution 
  - Big O = nlog(n)

3. Hint from interviewer -  Instaed of binary search which is uni directinal, why don't you take pair of numbers and try to resolve the issue 

Solution:-  [ 1,2,3,9]
- As largest sum will be last two number because array is in ascending order (3+ 9 = 12)
- Range will be from (first+last) = maxSum
- Linear search can be done by checking first + last and moving counter bi-directional based upon sum.

*/

function findPairsWiithMatchingSum(array, sum) {
    let start = 0;
    let end = array.length - 1;
    let currentSum = 0
    while (start < end) {
      currentSum = array[start] + array[end];
      console.log(`currentSum = ${currentSum}, start = ${start}, end = ${end}`);
      if (currentSum === sum) {
        return true;
      } else if ( currentSum < sum ) {
        start++;
      } else {
        end--;
      }
    }
    return false;
}

console.log(findPairsWiithMatchingSum([1,2,3,9], 8));
console.log(findPairsWiithMatchingSum([1,2,4,4], 8));
// Time complexity BigO = O(n)

