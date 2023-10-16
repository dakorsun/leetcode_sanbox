/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    let guess = 1;
    let guessIndex = k;
    while (n > 1) {
        [guess, guessIndex] = previousOccurence(guess, guessIndex);
        n--;
    }
    return guess === 0 ? 1 : 0;
};
function previousOccurence(num, i) {
    const parentIndex = (i + (i % 2)) / 2;
    let isOdd = !!(i % 2);
    const parentNum = isOdd ? num : num === 1 ? 0 : 1;
    return [parentNum, parentIndex];
}

module.exports = kthGrammar;
