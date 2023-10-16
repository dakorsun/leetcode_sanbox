const longestPalindrome = require('./main');

const sources = [
    {
        s: 'babad',
        expectation: ['bab', 'aba'],
    },
    {
        s: 'cbbd',
        expectation: ['bb'],
    },
    {
        s: 'teset',
        expectation: ['teset'],
    },
    {
        s: 'gaga',
        expectation: ['gag', 'aga'],
    },
    {
        s: 'aaaa',
        expectation: ['aaaa'],
    },
];

describe('5. Longest Palindromic Substring', () => {
    sources.forEach(({ s, expectation }, i) => {
        it(`5: case ${i + 1}, s - ${s}, expect to contain - ${JSON.stringify(
            expectation
        )}`, () => {
            expect(expectation).toContain(longestPalindrome(s));
        });
    });
});
