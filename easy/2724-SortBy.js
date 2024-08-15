/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

//Parameters - will always accept a valid array (may contain nums, objects, more arrays)
//Returns - fn will always return a num, sortedArr will return a sorted version of the original array
//Examples - given in description
/*Pseudo-code - first we will declare the sortedArr variable
Then sort arr with each element being passed through
Lastly, we will return sortedArr
*/
var sortBy = function(arr, fn) {
    let sortedArr = arr.sort((a,b) => fn(a) - fn(b))
    return sortedArr
};