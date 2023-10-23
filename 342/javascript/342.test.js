const isPowerOfFour = require('./main');

const sources = [
    { n: 16, expectation: true },
    { n: 5, expectation: false },
    { n: 1, expectation: true },
    { n: 0, expectation: false },
    { n: 8, expectation: false },
    { n: -2147483648, expectation: false },
];

describe('342. Power of Four ', () => {
    sources.forEach(({ n, expectation }, i) => {
        it(`342: case ${i + 1}, n - ${n}, expect - ${expectation}`, () => {
            expect(isPowerOfFour(n)).toBe(expectation);
        });
    });
});
