/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    let rounds = minutesToTest / minutesToDie + 1,
        n = 0;
    while (rounds ** n < buckets) n++;
    return n;
};

module.exports = poorPigs;
