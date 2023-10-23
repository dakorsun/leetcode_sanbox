/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
    let res = nums[k];
    let mini = nums[k];
    let i = k;
    let j = k;
    const n = nums.length;

    while (i > 0 || j < n - 1) {
        if (i === 0) {
            j++;
        } else if (j === n - 1) {
            i--;
        } else if (nums[i - 1] < nums[j + 1]) {
            j++;
        } else {
            i--;
        }

        mini = Math.min(mini, Math.min(nums[i], nums[j]));
        res = Math.max(res, mini * (j - i + 1));
    }

    return res;
};

module.exports = maximumScore;
