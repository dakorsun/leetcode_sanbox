/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function doBackSpace(str) {
        const stack = [];
        str.split('').forEach((symbol) => {
            if (symbol == '#') {
                stack.pop();
            } else {
                stack.push(symbol);
            }
        });
        return stack.join('');
    }
    return doBackSpace(s) === doBackSpace(t);
};

module.exports = backspaceCompare;
