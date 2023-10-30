const sortByBits = require('./main');

const sources = [
    {
        arr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        expectation: [0, 1, 2, 4, 8, 3, 5, 6, 7],
    },
    {
        arr: [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1],
        expectation: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    },
];

describe('1356: Sort Integers by The Numbers of 1 Bits', () => {
    sources.forEach(({ arr, expectation }, i) => {
        it(`1356: case ${i + 1}`, () => {
            expect(sortByBits(arr)).toStrictEqual(expectation);
        });
    });
});
