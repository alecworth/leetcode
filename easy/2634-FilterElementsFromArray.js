/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

//Parameters (fn will always be a valid filter function, arr will always contain nums >= -10^9 and <= 10^9, and length >=0 and <= 1000)
//Returns (will always return array that has been filtered with num/nums)
//Examples (given in description)
/*Pseudo code 
First, I will declare the filteredArr variable and use the filter method with the callback to fn
Lastly, I will return the filteredArr variable
*/
var filter = function(arr, fn) {
    const filteredArr = arr.filter(fn)
    return filteredArr
};