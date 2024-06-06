/**
 * @param {string[]} words
 * @return {string[]}
 */
let commonChars = function(words) {
    // create array that will hold letters occurring in first word
    let common = words[0].split('');
    
    // Iterate through the rest of the words
    for (let i = 1; i < words.length; i++) {
        let word = words[i].split('');
        // Create a new array for the common characters in the current word
        common = common.filter(char => {
            let index = word.indexOf(char);
            if (index !== -1) {
                word[index] = ''; // Mark this character as used
                return true; // Keep this character in the common array
            }
            return false; // Remove this character from the common array
        });
    }
    
    return common;
};