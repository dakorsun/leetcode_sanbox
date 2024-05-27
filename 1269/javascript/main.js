/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
    const maxPosition = Math.min(Math.floor(steps / 2) + 1, arrLen);
    let curWays = new Array(maxPosition + 2).fill(0);
    let nextWays = new Array(maxPosition + 2).fill(0);
    curWays[1] = 1;
    const mod = 10 ** 9 + 7;

    while (steps > 0) {
        for (let pos = 1; pos <= maxPosition; pos++) {
            nextWays[pos] =
                (curWays[pos] + curWays[pos - 1] + curWays[pos + 1]) % mod;
        }

        // Swap arrays using a temporary variable
        let temp = curWays;
        curWays = nextWays;
        nextWays = temp;
        steps--;
    }

    return curWays[1];
};

module.exports = numWays;
