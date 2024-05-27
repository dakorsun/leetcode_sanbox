import { describe, it, expect } from 'vitest';
import findTheDifference from './main';
const sources = [
    { s: 'abcd', t: 'abcde', expectation: 'e' },
    { s: '', t: 'y', expectation: 'y' },
];

describe('389. Find the Difference', () => {
    sources.forEach(({ s, t, expectation }) => {
        it(`s: ${s}, t: ${t}`, () => {
            expect(findTheDifference(s, t)).toBe(expectation);
        });
    });
});
