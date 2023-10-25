const kthGrammar = require('./main');

const sources = [
    {
        n: 1,
        k: 1,
        expectation: 0,
    },
    {
        n: 2,
        k: 1,
        expectation: 0,
    },
    {
        n: 2,
        k: 2,
        expectation: 1,
    },
    {
        n: 3,
        k: 1,
        expectation: 0,
    },
];

describe('779. K-th Symbol in Grammar', () => {
    sources.forEach(({ n, k, expectation }, i) => {
        it(`779: case ${i + 1}, n - ${n}, k - ${k}`, () => {
            expect(kthGrammar(n, k)).toBe(expectation);
        });
    });
});
