const removeDuplicateLetters = require('./main');

const sources = [
    { s: 'bcabc', expectation: 'abc' },
    { s: 'cbacdcbc', expectation: 'acdb' },
    { s: 'abacb', expectation: 'abc' },
];

describe('316. Remove Duplicate Letters', () => {
    sources.forEach(({ s, expectation }) => {
        it(`s: ${s}`, () => {
            expect(removeDuplicateLetters(s)).toBe(expectation);
        });
    });
});
