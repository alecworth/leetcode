/**
 * @return {null|boolean|number|string|Array|Object}
 */

//Parameters - will always be an array, length >=0 and <= 1000. elements will be null|boolean|number|string|Array|Object
/*Returns 
- will always be one element returned
- will always be the last element in array unless there array.length < 1
- in that case, it'll return -1
*/
//Examples - Given in description
/*Pseudo-code 
- Will set up conditional with ternary operator
- If array length (*this* since it's a prototype function) is 1 or more, return the last element, else return -1
*/
Array.prototype.last = function() {
    return this.length >= 1 ? this[this.length - 1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */