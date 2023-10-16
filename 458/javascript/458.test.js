const poorPigs = require('./main');

const sources = [
    {
        buckets: 4,
        minutesToDie: 15,
        minutesToTest: 15,
        expectation: 2,
    },
    {
        buckets: 4,
        minutesToDie: 15,
        minutesToTest: 30,
        expectation: 2,
    },
];

describe('458. Poor Pigs', () => {
    sources.forEach(
        ({ buckets, minutesToDie, minutesToTest, expectation }, i) => {
            it(`458: case ${
                i + 1
            }, \nbuckets - ${buckets}, \nminutesToDie - ${minutesToDie}, \nminutesToTest - ${minutesToTest} \n\n expect - ${expectation}`, () => {
                expect(poorPigs(buckets, minutesToDie, minutesToTest)).toBe(
                    expectation
                );
            });
        }
    );
});
