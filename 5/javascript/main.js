/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;

    const longestWithoutCenter = s
        .split('')
        .join('|')
        .split('')
        .reduce((longest, center, i, arr) => {
            let distance = 1;
            let match = isMatch(arr, i, distance);
            let skip = isSkip(center, distance);
            let result = center === '|' ? '' : center;
            while (match) {
                result = skip
                    ? result
                    : arr[i - distance] + result + arr[i + distance];
                distance++;
                match = isMatch(arr, i, distance);
                skip = isSkip(center, distance);
            }
            return result.length > longest.length ? result : longest;
        }, '');
    return longestWithoutCenter;
};

function isMatch(arr, i, distance) {
    return arr[i - distance] === arr[i + distance] && !!arr[i - distance];
}
function isSkip(center, distance) {
    return center === '|' ? distance % 2 === 0 : distance % 2 !== 0;
}

module.exports = longestPalindrome;
