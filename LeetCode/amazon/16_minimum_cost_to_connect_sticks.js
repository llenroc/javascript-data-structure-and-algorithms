// Leetcode 1167 - https://leetcode.com/problems/minimum-cost-to-connect-sticks/

//Youtube - https://www.youtube.com/watch?v=EuUBxM_E03E
//Code - https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/%20Min%20Cost%20to%20Connect%20Ropes/index.js

/*
ou have some number of sticks with positive integer lengths. These lengths are given as an array sticks, where sticks[i] is the length of the ith stick.

You can connect any two sticks of lengths x and y into one stick by paying a cost of x + y. You must connect all the sticks until there is only one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

 

Example 1:

Input: sticks = [2,4,3]
Output: 14
Explanation: You start with sticks = [2,4,3].
1. Combine sticks 2 and 3 for a cost of 2 + 3 = 5. Now you have sticks = [5,4].
2. Combine sticks 5 and 4 for a cost of 5 + 4 = 9. Now you have sticks = [9].
There is only one stick left, so you are done. The total cost is 5 + 9 = 14.


Example 2:

Input: sticks = [1,8,3,5]
Output: 30
Explanation: You start with sticks = [1,8,3,5].
1. Combine sticks 1 and 3 for a cost of 1 + 3 = 4. Now you have sticks = [4,8,5].
2. Combine sticks 4 and 5 for a cost of 4 + 5 = 9. Now you have sticks = [9,8].
3. Combine sticks 9 and 8 for a cost of 9 + 8 = 17. Now you have sticks = [17].
There is only one stick left, so you are done. The total cost is 4 + 9 + 17 = 30.


Example 3:

Input: sticks = [5]
Output: 0
Explanation: There is only one stick, so you don't need to do anything. The total cost is 0.

*/


//Min  Heap
function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class MinHeap {
  constructor(items){
    this.arr = [];
    for(let item of items){
      this.push(item);
    }
  }
  push(item){
    const { arr } = this;
    arr.push(item);
    let len = arr.length;
    let child = len - 1;
    let parent = child % 2 === 0 ? (child - 2)/2 : (child - 1)/2;

    while(parent >= 0 && arr[child] < arr[parent]){
      swap(arr, child, parent);
      child = parent;
      parent = child % 2 === 0 ? (child - 2)/2 : (child - 1)/2;
    }
  }
  pop(){
    const { arr } = this
    if (!arr.length) return null;
    const result = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    if (arr.length) this.heapify(0);
    return result;
  }
  heapify(parent){
    const { arr } = this;
    if (!arr.length) return null;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;

    if (arr[left] && arr[right]){
      if (arr[parent] > arr[left] && arr[left] < arr[right]){
        swap(arr, left, parent);
        this.heapify(left);
        return;
      }
      if (arr[parent] > arr[right] && arr[right] < arr[left]){
        swap(arr, right, parent);
        this.heapify(right);
        return;
      }
    }
    if (arr[right] && arr[parent] > arr[right]){
      swap(arr, right, parent);
      this.heapify(right);
      return;
    }
    if (arr[left] && arr[parent] > arr[left]) {
      swap(arr, left, parent);
      this.heapify(left);
      return;
    }
  }
  size(){
    return this.arr.length;
  }
  peek(){
    return this.arr[0];
  }
}

const minCost = (ropes)=>{

    let minHeap = new MinHeap(ropes);

    let res = 0;
    while(minHeap.size() > 1){
        let nextTwoRopes = minHeap.pop() + minHeap.pop();
        res += nextTwoRopes;
        minHeap.push(nextTwoRopes)
    }

    return res;
}

let ropes = [8, 4, 6, 12];
console.log(minCost(ropes)); // 58

ropes = [20, 4, 8, 2];
console.log(minCost(ropes)); // 54

ropes = [1, 2, 5, 10, 35, 89];
console.log(minCost(ropes)); // 224

ropes = [2, 2, 3, 3];
console.log(minCost(ropes)); // 20

ropes = [2,4,3];
console.log(minCost(ropes)); // 14

ropes = [1,8,3,5];
console.log(minCost(ropes)); // 30