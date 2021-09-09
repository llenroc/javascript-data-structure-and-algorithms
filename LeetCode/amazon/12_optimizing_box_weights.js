
/*
Optimizing Box Weights:

An Amazon Fulfillment Associate has a set of items that need to be packed into two boxes. Given an integer array of the item weights (arr) to be packed, divide the item weights into two subsets, A and B, for packing into the associated boxes, while respecting the following conditions:

• The intersection of A and B is null.
• The union A and B is equal to the original array. The number of elements in subset A is minimal.
• The sum of A's weights is greater than the sum of B's weights.

Return the subset A in increasing order where the sum of A's weights is greater than the sum of B's weights. If more than one subset A exists, return the one with the maximal total weight.

Example:
n = 5 
arr = [3, 7, 5, 6, 2] 
The 2 subsets in arr that satisfy the conditions for A are [5, 7] and [6, 7]:
• A is minimal (size 2) 
• Sum(A) = (5 + 7) = 12 > Sum(B) = (2 + 3 + 6) = 11 
• Sum(A) = (6 + 7) = 13 > Sum() = (2 + 3 + 5) = 10 
• The intersection of A and B is null and their union is equal to arr. 
The subset A where the sum of its weight is maximal is [6, 7]. 

*/


/*
Solution approach 

Let T be the initial set.
Let sum(T) = sum of all elements in T , sum(A) = sum of all elements in A

Since each element has to go either in the 1st subset or the 2nd, sum(A) + sum(B) = sum(T)

Since subset A must be minimal and should contain the maximum sum subset out of all equally sized minimal subset options, the greedy approach is to sort the initial set T into descending order and take the elements one by one into the subset A , until the following condition is hit --->

          sum(A) > sum(B) ===> sum(A) > T - sum(A)


*/


const getSubsetA = (array) => {
  // Calculate total sum of all the values in the array
  let sumTotal = array.reduce((total, item, index, list) => {
      total += item;
      return total;
  }, 0);

  // Sort array in desceneding order
  array.sort((a,b) => b-a);

  const setA = [];
  let sumA = 0;
  let index = 0;
  // Below loop will exit when sumA gets bigger that sumTotal - sumA
  while(sumA <= sumTotal - sumA) {
    setA.push(array[index]);
    sumA += array[index];
    index++;
  }

  setA.sort();

  return setA;
}

console.log(getSubsetA([3, 7, 5, 6, 2])); // [ 6, 7 ]
console.log(getSubsetA([4, 5, 2, 7, 2, 5, 8])); // [ 5, 7, 8 ]
