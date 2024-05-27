import { describe, it, expect } from 'vitest';
import findPoisonedDuration from './main';

const sources = [
    { timeSeries: [1, 4], duration: 2, expectation: 4 },
    { timeSeries: [1, 2], duration: 2, expectation: 3 },
    { timeSeries: [1, 2, 3, 4, 5, 6, 7, 8, 9], duration: 0, expectation: 0 },
    { timeSeries: [1, 2, 3, 4, 5], duration: 5, expectation: 9 },
    {
        timeSeries: [0, 3, 6, 9],
        duration: 5,
        expectation: 14,
    },
];

describe('495. Teemo Attacking', () => {
    sources.forEach(({ timeSeries, duration, expectation }) => {
        it(`timeSeries: ${timeSeries}, duration: ${duration}`, () => {
            expect(findPoisonedDuration(timeSeries, duration)).toBe(
                expectation
            );
        });
    });
});
