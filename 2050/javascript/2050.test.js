const minimumTime = require('./main');

const sources = [
    {
        n: 3,
        relations: [
            [1, 3],
            [2, 3],
        ],
        time: [3, 2, 5],
        expectation: 8,
    },
    {
        n: 5,
        relations: [
            [1, 5],
            [2, 5],
            [3, 5],
            [3, 4],
            [4, 5],
        ],
        time: [1, 2, 3, 4, 5],
        expectation: 12,
    },
    {
        n: 1,
        relations: [],
        time: [1],
        expectation: 1,
    },
    {
        n: 1,
        relations: [],
        time: [2],
        expectation: 2,
    },
    {
        n: 2,
        relations: [[2, 1]],
        time: [10000, 10000],
        expectation: 20000,
    },
    {
        n: 2,
        relations: [[1, 2]],
        time: [1, 1],
        expectation: 2,
    },
    {
        n: 2,
        relations: [],
        time: [3, 5],
        expectation: 5,
    },
    {
        n: 9,
        relations: [
            [2, 7],
            [2, 6],
            [3, 6],
            [4, 6],
            [7, 6],
            [2, 1],
            [3, 1],
            [4, 1],
            [6, 1],
            [7, 1],
            [3, 8],
            [5, 8],
            [7, 8],
            [1, 9],
            [2, 9],
            [6, 9],
            [7, 9],
        ],
        time: [9, 5, 9, 5, 8, 7, 7, 8, 4],
        expectation: 32,
    },
];

describe('2050. Parallel Courses III', () => {
    sources.forEach(({ n, relations, time, expectation }, i) => {
        try {
            it(`2050: case ${i + 1}\n n - ${n}, \n relations: ${JSON.stringify(
                relations
            )}, time: ${JSON.stringify(time)}}`, () => {
                expect(minimumTime(n, relations, time)).toBe(expectation);
            });
        } catch (error) {
            throw Error(`case: ${i + 1} - ${error.message}`);
        }
    });
});
