/**
 * @return {Function}
 */

//Parameters - takes any parameter, args length will always be <= 0 and <= 10
//Returns - always will return "Hello world", nothing else
//Examples - shown in description of leetcode problem
//Pseudocode - So simply, I will put return 'Hello World' into the inner function. That's all!

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */