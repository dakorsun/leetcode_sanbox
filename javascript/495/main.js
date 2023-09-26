const sources = require('./source.js')
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let result = 0;
  if (duration) {

    timeSeries.reduce((previous, poisonTime) => {
      let addition = 0;
      // if previous doesn't take effect anymore 
      if (previous + duration <= poisonTime) {
        addition = duration;
      } else
        // if previous effect overlaps with new
        if (isNaN(previous)) {
          addition = duration
        } else {
          addition = duration - (duration - (poisonTime - previous))
        }
      result = result + addition;

      return poisonTime
    }, '>')
  }
  return result
};

sources.forEach(({ timeSeries, duration }) => {
  const timeStart = Date.now()
  console.log(findPoisonedDuration(timeSeries, duration))
  const timeEnd = Date.now()
  console.log(`time used: ${timeEnd - timeStart} ms`)
})
