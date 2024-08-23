/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

/*
Parameters 
- init will always be >= -1000 and <= 1000
- calls.length will always be >= 0 and <= 1000
- calls[i] will always be increment, decrement, or reset
Returns
- createCounter will always return obj
- increment will always return currentCount++
- decrement will always return currentCount--
- reset will always set currentCount to init and return that  
Examples - Given in description
Pseudo-code 
- First, we will set up an obj variable holding an object with currentCount, increment, decrement, and reset
- Next, we'll set currentCount to be whatever init value is
- Next, we'll set up increment, decrement, and reset functions, all returning currentCount
- Lastly, we return obj 
*/

var createCounter = function(init) {
    let obj = {
        currentCount : init,

        increment : function() {
            this.currentCount++
            return this.currentCount
        },
        decrement : function() {
            this.currentCount--
            return this.currentCount
        },
        reset : function() {
            this.currentCount = init
            return this.currentCount
        }
    }
    return obj
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */