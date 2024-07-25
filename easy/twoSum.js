/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // do nested for loop to iterate through each num except for duplicate of current num
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j && nums[i] + nums[j] === target) {
                    return [i, j]
            }
        }
    }
};