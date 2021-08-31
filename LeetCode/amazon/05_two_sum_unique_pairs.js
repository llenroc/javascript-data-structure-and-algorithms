// https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/Two%20Sum%20-%20Unique%20Pairs/index.js


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {

    let map = {};
    let set = new Set();

    for(let i=0; i < numbers.length; i++){
        let y = target - numbers[i];
        if(y in map){
            set.add(`${y}, ${numbers[i]}`)
        }else{
            map[numbers[i]] = i;
        }
    }

    return set;
};

let nums = [1, 1, 2, 45, 46, 46], target = 47;
console.log(twoSum(nums, target)); // Set { '2, 45', '1, 46' }

nums = [1, 1], target = 2;
console.log(twoSum(nums, target)); // Set { '1, 1' }

nums = [1, 5, 1, 5], target = 6;
console.log(twoSum(nums, target)); // Set { '1, 5' }