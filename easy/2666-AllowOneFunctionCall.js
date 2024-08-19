/**
 * @param {Function} fn
 * @return {Function}
 */

//Parameters - on first function, will always be a valid function | Second function, always is an array of nums
//Returns - will always return a number the first time, after that will always return undefined
//Examples - given in description
/*Pseudocode 
First, declare once function
Next, declare called variable and set to false, as well as declaring result variable
Now, call new function with args in an array
Set up conditional to check whether it's been called before. 
If so, return undefined, otherwise run each num in arr through inner function using apply method, setting called to true
*/
function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
            return result;
        }
        return undefined;
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
