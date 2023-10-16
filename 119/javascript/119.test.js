const getRow = require('./main');

const sources = [
    {
        rowIndex: 3,
        expectation: [1, 3, 3, 1],
    },
    {
        rowIndex: 0,
        expectation: [1],
    },
    {
        rowIndex: 1,
        expectation: [1, 1],
    },
];

describe("119. Pascal's Triangle II", () => {
    sources.forEach(({ rowIndex, expectation }, i) => {
        it(`119: case ${i + 1}\n rowIndex - ${rowIndex}`, () => {
            expect(getRow(rowIndex)).toStrictEqual(expectation);
        });
    });
});
