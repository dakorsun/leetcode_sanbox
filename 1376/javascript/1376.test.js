const numOfMinutes = require('./main');

const sources = [
    {
        n: 1,
        headID: 0,
        manager: [-1],
        informTime: [0],
        expectation: 0,
    },
    {
        n: 6,
        headID: 2,
        manager: [2, 2, -1, 2, 2, 2],
        informTime: [0, 0, 1, 0, 0, 0],
        expectation: 1,
    },
    {
        n: 15,
        headID: 0,
        manager: [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
        informTime: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        expectation: 3,
    },
    {
        n: 8,
        headID: 0,
        manager: [-1, 5, 0, 6, 7, 0, 0, 0],
        informTime: [89, 0, 0, 0, 0, 523, 241, 519],
        expectation: 612,
    },
    {
        n: 10,
        headID: 3,
        manager: [8, 9, 8, -1, 7, 1, 2, 0, 3, 0],
        informTime: [224, 943, 160, 909, 0, 0, 0, 643, 867, 722],
        expectation: 3665,
    },
];

describe('1376. Time Needed to Inform All Employees', () => {
    sources.forEach(({ n, headID, manager, informTime, expectation }, i) => {
        it(`1376: case ${
            i + 1
        }\n n - ${n}; headID - ${headID}; manager - ${manager}; informTime: ${informTime}`, () => {
            expect(numOfMinutes(n, headID, manager, informTime)).toBe(
                expectation
            );
        });
    });
});
