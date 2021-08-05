//https://github.com/tonycao/Leetcode-Unlocked
// http://bugmenot.com/view/leetcode.com





/*
    We have an array of objects A and an array of indexes B. 
    Reorder objects in array A with given indexes in array B. Do not change array A's length. 
        
    example:
    var A = [C, D, E, F, G];
    var B = [3, 0, 4, 1, 2];
    sort(A, B);
    // A is now [D, F, G, C, E];
*/

var A = ['C', 'D', 'E', 'F', 'G'],
    B = [3, 0, 4, 1, 2],
    C = [];
A.forEach(function(value, index) {
    C[B[index]] = value;
});

console.log(C); // ["D", "F", "G", "C", "E"]

//-------------------------------------
/*
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    while (index <= nums.length - 2) {
        if(nums[index] === nums[index+1]) {
            nums.splice(index+1,1);
        } else {
            index++;
        }  
    }
    
    return nums.length;
};

//-------------------------------------
/*
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(!nums || nums.length === 0) return false;
    for(let i = 0; i < nums.length; i++ ) {
        if(nums.indexOf(nums[i]) != i) return true;
    }
    return false;
};


//-------------------------------------
/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it 
without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((a,b) => a^b );
};


//-------------------------------------
/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lo = 0,
        hi = nums.length-1;
    const swap = (i,j) => {
        let keep = nums[i];
        nums[i] = nums[j];
        nums[j] = keep;
    }
    while(lo < hi) {
        if(nums[lo] === 0) {
           let temp = lo;
           while(temp < hi) {
                swap(temp, temp+1);
                temp++;
           }
           hi--;
        } else {
           lo++;
        }
    }  
};


//-------------------------------------
/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++ ) {
        let diff = target - nums[i];
        for(let j = i+1; j < nums.length; j++ ) {
            if(diff == nums[j]) {
                return [i,j];
            }
        }
    }
    return [];
};


//-------------------------------------
/*

*/

