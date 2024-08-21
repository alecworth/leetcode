/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

/*Parameters
 - nums will always be an array with a length of >= 0 and <= 1000
 - integers in nums will always be >= 0 and <= 1000
 - fn will always be a function
 - init will always be an integer
Returns
- will always return one integer, either the answer of the fn or init if nums.length is < 1
Examples
- Given in description
Pseudo-code
- First, we will validate whether nums.length is > 0, returning init if not
- Next, we will declare val which will be init to start off
- Next, we're setting up a map function to go through each element in nums, setting val to the result of fn for each element
- Lastly, we'll return val
*/

var reduce = function(nums, fn, init) {
    if (!nums.length) {
        return init
    }
    let val = init
    nums.map((element) => val = fn(val, element))
    return val
};