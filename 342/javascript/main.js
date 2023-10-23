/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1 || n === 4) {
        return true;
    }

    if (n < 4) {
        return false;
    }

    return n % 4 === 0 ? isPowerOfFour(n / 4) : false;
};

module.exports = isPowerOfFour;
