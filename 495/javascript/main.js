/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let result = 0;
    if (duration) {
        timeSeries.reduce((previous, poisonTime) => {
            let addition = 0;
            // if previous doesn't take effect anymore
            if (previous + duration <= poisonTime) {
                addition = duration;
            }
            // if previous effect overlaps with new
            else if (isNaN(previous)) {
                addition = duration;
            } else {
                addition = duration - (duration - (poisonTime - previous));
            }
            result = result + addition;

            return poisonTime;
        }, '>');
    }
    return result;
};

module.exports = findPoisonedDuration;
