/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

/*Parameters 
- fn will always be a function
- args will always be a valid array of nums with a length >= 1 and <= 10
- t will be >= 20 and <= 1000
- cancelTime will be >= 10 and <= 1000
*/
//Returns - will return either the result of fn, or return cancelFn
//Examples - given in description
/*Pseudo-code
- First, I'll declare the timeoutId variable that'll hold the setTimeout function, to execute fn after t seconds
- Next, I'll declare the cancelFn function to be returned, which has the clearTimeout function 
- It'll either return an array with including  the result of fn(...args) or an empty array
*/

var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args)
    }, t);

    return function cancelFn() {
        clearTimeout(timeoutId)
    };
}

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */