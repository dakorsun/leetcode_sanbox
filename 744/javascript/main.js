/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let pointer = 0;

    while (pointer < letters.length) {
        if (letters[pointer] > target) {
            break;
        }
        pointer++;
    }

    if (pointer >= letters.length) pointer = 0;

    return letters[pointer];
};

module.exports = nextGreatestLetter;
