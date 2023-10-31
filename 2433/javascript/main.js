/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    const result = pref.map((pr, i, arr) => {
        if (i === 0) {
            return pr;
        }
        return arr[i - 1] ^ pr;
    });
    return result;
};

module.exports = findArray;
