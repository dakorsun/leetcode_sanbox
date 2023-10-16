const validateBinaryTreeNodes = require('./main');

const sources = [
    {
        n: 4,
        leftChild: [1, -1, 3, -1],
        rightChild: [2, -1, -1, -1],
        expectation: true,
    },
    {
        n: 4,
        leftChild: [1, -1, 3, -1],
        rightChild: [2, 3, -1, -1],
        expectation: false,
    },
    {
        n: 2,
        leftChild: [1, 0],
        rightChild: [-1, -1],
        expectation: false,
    },
    {
        n: 4,
        leftChild: [1, 0, 3, -1],
        rightChild: [-1, -1, -1, -1],
        expectation: false,
    },
    {
        n: 4,
        leftChild: [3, -1, 1, -1],
        rightChild: [-1, -1, 0, -1],
        expectation: true,
    },
    {
        n: 5,
        leftChild: [1, 3, -1, -1, -1],
        rightChild: [-1, 2, 4, -1, -1],
        expectation: true,
    },
    {
        n: 4,
        leftChild: [1, 2, 0, -1],
        rightChild: [-1, -1, -1, -1],
        expectation: false,
    },
    {
        n: 1,
        leftChild: [-1],
        rightChild: [-1],
        expectation: true,
    },
    {
        n: 6,
        leftChild: [1, 2, 0, 4, -1, -1],
        rightChild: [-1, -1, -1, 5, -1, -1],
        expectation: false,
    },
    {
        n: 2,
        leftChild: [-1, 0],
        rightChild: [-1, -1],
        expectation: true,
    },
];

describe('1361. Validate Binary Tree Nodes', () => {
    sources.forEach(({ n, leftChild, rightChild, expectation }, i) => {
        it(`1361: case ${
            i + 1
        }\n n - ${n}, \n leftChild: ${leftChild}, rightChild: ${rightChild}`, () => {
            expect(validateBinaryTreeNodes(n, leftChild, rightChild)).toBe(
                expectation
            );
        });
    });
});
