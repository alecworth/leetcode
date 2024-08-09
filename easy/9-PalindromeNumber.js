/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //Parameters will only be integers, they will only be from -2^31 -> 2^31 - 1
    //Returns will always be true or false only 
    //Examples (-131 reversed would be 131- which would be NaN, false since it's not 131)
    //Pseudo Code (did it out loud)
    let newStr = String(x).split('').reverse().join('')
    return x === Number(newStr)
};