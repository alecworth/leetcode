/**
 * @param {number} x
 * @return {number}
 */

/*
Parameters - x will always be a number that is >= -2^31 and <= 2^31 - 1
Returns - will always return reversed integer while preserving the negative sign if originally there
Examples 
x = 123 | output = 321
x = -4125 | output = -5214
x = 1000000009 | output = 0
Pseudo-code
- First, we will declare reversedStr to be x turned into a string and split into arr by char/reversed
- Next, we'll declare reversedNum to be assigned later
- Next, we'll check if there is a '-' in the array
- It'll remove the '-' if it exists and add it to the beginning of reversedStr, which will be converted back into num
- Otherwise, it'll just convert back into a num
- Lastly, we'll check if reversedNum is outside of the constraints, return 0 if so and reversedNum if not
*/

var reverse = function(x) {
    let reversedStr = String(x).split('').reverse()
    let reversedNum
    
    if (reversedStr.includes('-')) {
        reversedStr.pop()
        reversedNum = '-' + Number(reversedStr.join(''))
    } else {
        reversedNum = Number(reversedStr.join(''))
    }

    if(reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return reversedNum
    }
};