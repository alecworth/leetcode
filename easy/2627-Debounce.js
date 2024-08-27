/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

 /*
 Parameters 
 - fn will always be a function, t will be >= 0 and <= 1000, calls will always be >= 0 and <=1000
 - num of arguments provided to fn will be >= 0 and <= 10
 Returns
 - will always return the debounced version of the function
 Examples
 -given in description
 Pseudo-code
 - First, we will declare the timeout variable 
 - Next, we'll create a new function to be returned
 - We'll clear the timeout variable in case it's being called within the window of t
 - Lastly, we assign setTimeout to execute fn with a delay of t ms
 */
 var debounce = function(fn, t) {
    let timeout
    
    return function(...args) {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            fn(...args)
        }, t)
    }

};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */