/**
 * @param {number[]} heights
 * @return {number}
 */
let heightChecker = function(heights) {
    let sum = 0
    let increasingOrderArr = heights.slice().sort((a,b) => a - b)
    for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== increasingOrderArr[i]) {
                sum++
            }
    }
    return sum
};