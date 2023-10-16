const numFactoredBinaryTrees = require('./main');

const sources = [
    {
        arr: [2, 4],
        expectation: 3,
    },
    {
        arr: [2, 4, 5, 10],
        expectation: 7,
    },
];

describe('823. Bitary Trees With Factors', () => {
    sources.forEach(({ arr, expectation }, i) => {
        it(`823: case ${i + 1}, arr - ${JSON.stringify(arr)}`, () => {
            expect(numFactoredBinaryTrees(arr)).toBe(expectation);
        });
    });
});
