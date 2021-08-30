
// https://leetcode.com/problems/two-sum/
// Two Sum


// Loop through nums form 1 to n-1
// store nums[i] index in hashMap.
// if sum matches == return result 
var twoSum = function(nums, target) { // [2,7,11,15], 9
    //Edge conditions 
    if(!nums || nums.length < 2) return []; 
    const map = new Map();
    for(let index = 0; index < nums.length; index++) {
      const required = target - nums[index]; // 7
      if(map.has(required)) {
        return [index, map.get(required)];
      }
      map.set(nums[index], index);
    }
};


console.log(twoSum([2,7,11,15], 9)); // [0, 1]
console.log(twoSum([3,2,4], 6)); // [1, 2]
console.log(twoSum([3,3], 6)); // [0, 1]