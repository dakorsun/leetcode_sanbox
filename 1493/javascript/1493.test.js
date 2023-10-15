const longestSubarray = require('./main');

const sources = [
    { nums: [1, 1, 0, 1], expectation: 3 },
    { nums: [0, 1, 1, 1, 0, 1, 1, 0, 1], expectation: 5 },
    { nums: [1, 1, 1], expectation: 2 },
    { nums: [0], expectation: 0 },
];

describe("1493. Longest Subarray of 1'st After Deleting One Element", () => {
    sources.forEach(({ nums, expectation }, i) => {
        it(`1493: case ${i + 1}\n nums: ${nums}`, () => {
            expect(longestSubarray(nums)).toBe(expectation);
        });
    });
});
