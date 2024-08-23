/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

/*
Parameters 
- arr will always be a valid array with a length >= 2 and <= 10^5
- size will always be >= 1 and <= arr.length + 1
Returns
- return a chunked array, into subarrays of size length
Examples
- given in description
Pseudo-code
-First, we're going to declare a newArr variable as an empty array
-Next, we're going to do a loop ending at arr.length-1 and iterating every size amount of times
-Next, we'll push a sliced array to newArr starting at i and ending at i+size
-Lastly, we return newArr
*/


var chunk = function(arr, size) {
    let newArr = []
    for (let i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size))
    }
    return newArr
};
