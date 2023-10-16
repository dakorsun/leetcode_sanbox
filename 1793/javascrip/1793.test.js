const maximumScore = require('./main');

const sources = [
    {
        nums: [1, 4, 3, 7, 4, 5],
        k: 3,
        expectation: 15,
    },
    {
        nums: [5, 5, 4, 5, 4, 1, 1, 1],
        k: 0,
        expectation: 20,
    },
];

describe('1793. Maximum Score of a Good Subarray ', () => {
    sources.forEach(({ nums, k, expectation }, i) => {
        it(`1793: case ${i + 1}, nums - ${JSON.stringify(
            nums
        )}, k - ${k}, expect - ${expectation}`, () => {
            expect(maximumScore(nums, k)).toBe(expectation);
        });
    });
});
