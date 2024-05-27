/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
    arr.sort((a, b) => a - b);
    const subtreeCount = {};

    for (const root of arr) {
        subtreeCount[root] = 1;

        for (const factor of arr) {
            if (factor >= root) {
                break;
            }

            if (root % factor === 0 && subtreeCount[root / factor]) {
                subtreeCount[root] +=
                    subtreeCount[factor] * subtreeCount[root / factor];
            }
        }
    }

    let totalTrees = 0;
    for (const key in subtreeCount) {
        totalTrees += subtreeCount[key];
    }

    return totalTrees % (10 ** 9 + 7);
};

module.exports = numFactoredBinaryTrees;
