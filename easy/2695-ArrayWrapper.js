/**
 * @param {number[]} nums
 * @return {void}
 */

//Parameters (nums will always be numbers >= 0 and <= 1000, array length will be >= 0 and <= 1000)
//Returns (add operation will always equal one number, string operation will always equal string with brackets and nums separated by commas)
//Examples (provided in description)
/*Pseudocode 
First, I'll need to assign nums as a property to ArrayWrapper
Next, for the add operator, I'll need to reduce the nums array to each number added up
Lastly, I will join the arrays together and wrap them in brackets within a string by way of template literal 
*/

var ArrayWrapper = function(nums) {
    this.nums = nums
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((a,b) => a + b, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */