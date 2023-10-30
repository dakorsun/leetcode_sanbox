/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    arr.sort((a, b) => {
        const aBin = (a >>> 0).toString(2);
        const bBin = (b >>> 0).toString(2);
        let aOneLength = 0,
            bOneLength = 0;
        for (
            let i = 0;
            i < (aBin.length > bBin.length ? aBin.length : bBin.length);
            i++
        ) {
            if (aBin[i] > 0) aOneLength++;
            if (bBin[i] > 0) bOneLength++;
        }
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
