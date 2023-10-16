const findArray = require('./main');

const sources = [
    {
        pref: [5, 2, 0, 3, 1],
        expectation: [5, 7, 2, 3, 2],
    },
    {
        pref: [13],
        expectation: [13],
    },
];

describe('2433. Find The Original Array of Prefix Xor', () => {
    sources.forEach(({ pref, expectation }, i) => {
        it(`2433: case ${i + 1}`, async () => {
            expect(findArray(pref)).toStrictEqual(expectation);
        });
    });
});
