const countVowelPermutation = require('./main');

const sources = [
    {
        n: 1,
        expectation: 5,
    },
    {
        n: 2,
        expectation: 10,
    },
];

describe('1220. Count Vowels Permutation', () => {
    sources.forEach(({ n, expectation }, i) => {
        it(`1220: case ${i + 1}`, () => {
            expect(countVowelPermutation(n)).toBe(expectation);
        });
    });
});
