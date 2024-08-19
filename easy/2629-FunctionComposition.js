/**
 * @param {Function[]} functions
 * @return {Function}
 */

//Parameters - functions will always be an array of functions >= 0 and <= 1000, x will always be 1 integer
//Returns - will always return 1 integer
//Examples - given in description
/*Psuedocode 
First, I will set up a loop to iterate backwards through the functions array
Next, I will pass x through each function, setting each new answer to x
Lastly, after x has been passed through each function, I will return x
*/

var compose = function(functions) {
    
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
        }
        return x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */