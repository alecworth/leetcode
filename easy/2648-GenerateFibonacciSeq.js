/**
 * @return {Generator<number>}
 */

/*
Parameters - none, but will call >= 0 times but <= 50 times
Returns - will return a generator object which yields the fibonacci sequence 
Examples - 

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted

Pseudo-code - First, we declare a and b variables equaling 1 and 0 respectively
- Next, we declare the temp variable that will eventually hold a and be used to assign that num to b
- Next, we set up a while loop with i starting at 50 and descending since it won't be called more than 50 times
- Next, we have it yield the first value at the beginning since it starts with 0, the first value of fib seq
- Lastly, we assign temp to the value of a to be later assigned to b, assign a to be a+b, and assign b to temp 
*/
var fibGenerator = function*() {
    var a = 1, b = 0, temp;
    let i = 50
    while (i >= 0){
        yield b;
        temp = a;
        a = a + b;
        b = temp;
        i--;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */