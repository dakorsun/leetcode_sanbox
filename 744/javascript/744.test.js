const nextGreatestLetter = require('./main');

const sources = [
    { letters: ['c', 'f', 'j'], target: 'a', expectation: 'c' },
    { letters: ['c', 'f', 'j'], target: 'c', expectation: 'f' },
    { letters: ['x', 'x', 'y', 'y'], target: 'z', expectation: 'x' },
    { letters: ['c', 'f', 'j'], target: 'g', expectation: 'j' },
];

describe('744. Find Smallest Letter Greater Than Target', () => {
    sources.forEach(({ letters, target, expectation }, n) => {
        it(`case: ${n + 1} - letters: ${letters}, target: ${target}`, () => {
            expect(nextGreatestLetter(letters, target)).toBe(expectation);
        });
    });
});
