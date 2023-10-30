/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    arr.sort((a, b) => {
        const aBin = (a >>> 0).toString(2);
        const bBin = (b >>> 0).toString(2);
        const aOneLength = aBin
            .split('0')
            .join('')
            .split('')
            .filter((str) => str.length).length;
        const bOneLength = bBin
            .split('0')
            .join('')
            .split('')
            .filter((str) => str.length).length;
        if (aOneLength > bOneLength) {
            return 1;
        }
        if (aOneLength < bOneLength) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    return arr;
};

module.exports = sortByBits;
