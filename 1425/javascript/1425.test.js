const constrainedSubsetSum = require('./main');

const sources = [
    {
        nums: [10, 2, -10, 5, 20],
        k: 2,
        expectation: 37,
    },
    {
        nums: [-1, -2, -3],
        k: 1,
        expectation: -1,
    },
    {
        nums: [10, -2, -10, -5, 20],
        k: 2,
        expectation: 23,
    },
    {
        nums: [-8269, 3217, -4023, -4138, -683, 6455, -3621, 9242, 4015, -3790],
        k: 1,
        expectation: 16091,
    },
];

describe('1425. Constroined Subsequence Sum', () => {
    sources.forEach(({ nums, k, expectation }, i) => {
        it(`1425: case ${i + 1}, nums - ${JSON.stringify(
            nums
        )}, k - ${k}`, () => {
            expect(constrainedSubsetSum(nums, k)).toBe(expectation);
        });
    });
});
