const numWays = require('./main');

const sources = [
    { steps: 3, arrLen: 2, expectation: 4 },
    { steps: 2, arrLen: 4, expectation: 2 },
    { steps: 4, arrLen: 2, expectation: 8 },
];

describe('1269. Number of Ways to Stay in the Same Place After Some Steps', () => {
    sources.forEach(({ steps, arrLen, expectation }, i) => {
        it(`1269: case ${i + 1}\n steps: ${steps}, arrLen: ${arrLen}`, () => {
            expect(numWays(steps, arrLen)).toBe(expectation);
        });
    });
});
