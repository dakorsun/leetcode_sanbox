/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    const zeroIndexes = nums.reduce((acc, num, i) => {
        if (num === 0) acc.push(i);
        return acc;
    }, []);

    if (zeroIndexes.length === 0) return nums.length - 1;

    const deletionResults = [];

    zeroIndexes.forEach((index, i, arr) => {
        if (index === 0 && index === nums.length - 1) {
            return;
        }

        const prevIndex = arr[i - 1] ?? -1;
        const nextIndex = arr[i + 1] ?? nums.length;

        const leftWing = index - prevIndex - 1;
        const rightWing = nextIndex - index - 1;

        deletionResults.push([index, leftWing + rightWing]);
    });

    if (deletionResults.length === 0) return 0;

    deletionResults.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        }
        if (a[1] < b[1]) {
            return 1;
        }
        return 0;
    });

    return deletionResults[0][1];
};

module.exports = longestSubarray;


