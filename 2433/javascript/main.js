/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    return pref
        .reverse()
        .map((pr, i, arr) => {
            if (i === arr.length - 1) {
                return pr;
            }
            return pr ^ arr[i + 1];
        })
        .reverse();
};

module.exports = findArray;
