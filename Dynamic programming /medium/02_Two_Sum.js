/*
Given an array of integers 'nums' and and integer 'target', return the index position of the two numbers such that they add up to target.

- Each input would have exactly one solution, and you may not use the same element twice.
- You can return the answer in any order.

Example 1;

Input -  nums = [2,7,11,15] and target = 9
output - [0,1]
*/


/** ~~~~~~~~ If Array is sorted ~~~~~~~~~~~ */
// Solution-1 - Nested loop
// Solution-2 - Run lop till lo < hi, lo = 0, hi = n-1



/** ~~~~~~~~ If Array is not sorted ~~~~~~~~~~~ */
// Solution1 - Nested loop
// Solution2 - Use hashMap to track the index.











/** ~~~~~~~~ Old notes ~~~~~~~~~~~ */

//http://www.geeksforgeeks.org/find-pairs-in-array-whose-sums-already-exist-in-array/
//http://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/
//http://www.geeksforgeeks.org/find-pairs-b-array-b-k/


//https://stackoverflow.com/questions/22566379/how-to-get-all-pairs-of-array-javascript
//[1,2,3,7,4,5,6].findPairs(6) = [[2,4], [1,5]] ;

//Most Efficient solution :- https://www.youtube.com/watch?v=s1xA_K1JReo&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=13


(function(){
  const logs = new ConsoleLog("findPairs", false);

  var findPairs = function(arr, value) {
    arr.sort(function(a,b){ //O(nlog(n))
      if (a>b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
    arr = unique(arr); //O(n)

    var lo = 0, hi = arr.length-1, result=[];
    while (lo < hi) { //O(n)
      var sum = arr[lo]+arr[hi];
      if(sum === value) {
        result.push([arr[lo], arr[hi]]);
        lo++;
      } else if (sum > value) {
        hi--;
      } else {
        lo++
      }
    }
    return result;
  }

   // Time complexity :- O(n) + O(nlog(n)) + O(n)

  Array.prototype.findPairs2 = function(n){
    if(this.length < 2) return [];
    const arr = unique(this); // Getting Unique Values //nested loop :- O(n)
    arr.sort(function (a, b) { return a*1 - b*1; }); //sorting the values   //Merge sort -> O(nlog(n))
    let result = [], length = arr.length;
    for (let i = 0; i < length - 1; i++) {  //nested loop :- O(n^2)
      for(let j = i+1; j < length; j++) {
        if(arr[j] >= n) {
          length = j;
        }
        if((arr[i]+arr[j]) == n){
          result.push([arr[i],arr[j]]);
        }
      }
    }
    return result;
  };
  // Time complexity :- O(n) + O(nlog(n)) + O(n^2)


  logs.push('[1,2,3,7,4,5,6,10,11,4,2] => [[1,5],[2,4]] = ', findPairs([1,2,3,7,4,5,6,10,11,4,2], 6));
  logs.push('[0,1,2,3,7,4,5,6] => [[0,6],[1,5],[2,4]] = ', findPairs([0,1,2,3,7,4,5,6,10,11,4,2], 6));

  const result = [0,1,2,3,7,4,5,6].findPairs2(6);
  const result1 = [1,2].findPairs2(6);
  const result2 = [1,2,3,7,4,5,6,10,11,4,2].findPairs2(6);
  const result3 = [1].findPairs2(6);
  logs.push(`FindPairs [1,2] => [] = `,result1); // []
  logs.push(`FindPairs [1,2,3,7,4,5,6,10,11,4,2] => [[1,5],[2,4]] = `, result2); // [[1,5],[2,4]]
  logs.push(`FindPairs [1] => [] = `, result3); // []
  logs.push(`FindPairs [0,1,2,3,7,4,5,6] => [[0,6],[1,5],[2,4]] = `, result); //[[0,6],[1,5],[2,4]]
  logs.print();
})();



