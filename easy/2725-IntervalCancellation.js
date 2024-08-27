/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

/*
Parameters 
- fn will always be a function, args will be an array, length of >=1 and <= 10, any integers
- t will be an integer that is >= 30 and <= 100
Returns 
- will always return cancelFn function
Examples - given in description
Pseudo-code 
- First, we'll call the function initially 
- Next, we'll declare intervalId, which will hold the setInterval function that calls fn(...args) every t secs
- Next, we'll create cancelFn as an arrow function that clears intervalId after cancelTimeMs ms
- Lastly, we'll call cancelFn
*/

var cancellable = function(fn, args, t) {

    // Call the function fn immediately with the provided arguments args
    fn(...args);

    // Set up an interval to call fn every t milliseconds
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Set up a timeout to cancel the interval after cancelTimeMs milliseconds
    const cancelFn = () => {
        clearInterval(intervalId);
    };

    // Return the cancel function
    return cancelFn;

};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */