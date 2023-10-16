const { largestValues, buildTree } = require('./main');

const sources = [
    {
        nodes: [1, 3, 2, 5, 3, null, 9],
        expectation: [1, 3, 9],
    },
    {
        nodes: [1, 2, 3],
        expectation: [1, 3],
    },
];

describe('515. Find Largest Value in Each Tree Row', () => {
    sources.forEach(({ nodes, expectation }, i) => {
        const root = buildTree(nodes);
        it(`515: case ${i + 1}, nodes - ${JSON.stringify(
            nodes
        )}, expect - ${JSON.stringify(expectation)}`, () => {
            expect(largestValues(root)).toStrictEqual(expectation);
        });
    });
});
