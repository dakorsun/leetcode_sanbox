/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const triangle = [];
    let pointer = 0;

    do {
        if (pointer === 0) {
            triangle[pointer] = [1];
        } else if (pointer === 1) {
            triangle[pointer] = [1, 1];
        } else {
            for (let i = 0; i <= pointer; i++) {
                if (i === 0) {
                    triangle[pointer] = [];
                }
                triangle[pointer][i] =
                    (triangle[pointer - 1][i - 1] ?? 0) +
                    (triangle[pointer - 1][i] ?? 0);
            }
        }
        pointer++;
    } while (pointer <= rowIndex);
    return triangle[triangle.length - 1];
};

module.exports = getRow;
