const sources = require('./source')
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const tArray = t.split('');
  const sArray = s.split('');
  sArray.forEach(sLetter => {
    const tIndexToRemove = tArray.findIndex(tLetter => tLetter === sLetter)
    if (tIndexToRemove > -1) tArray.splice(tIndexToRemove, 1)
  })

  return tArray[0];
};

sources.forEach(({ s, t }) => {
  console.log(findTheDifference(s, t))
})
