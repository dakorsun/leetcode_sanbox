class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    function findRoot(left, right) {
        const isParent = new Array(left.length).fill(false);
        for (let i = 0; i < left.length; i++) {
            if (left[i] !== -1) {
                isParent[left[i]] = true;
            }
            if (right[i] !== -1) {
                isParent[right[i]] = true;
            }
        }
        for (let i = 0; i < isParent.length; i++) {
            if (!isParent[i]) {
                return i;
            }
        }
        return -1;
    }

    function buildBinaryTree(n, left, right) {
        if (n <= 0) {
            throw Error('no nodes');
        }

        const nodes = new Array(n);

        for (let i = 0; i < n; i++) {
            nodes[i] = new TreeNode(i);
        }

        for (let i = 0; i < n; i++) {
            if (left[i] !== -1) {
                nodes[i].left = nodes[left[i]];
            }
            if (right[i] !== -1) {
                nodes[i].right = nodes[right[i]];
            }
        }

        return nodes;
    }
    function countNodes(root) {
        if (!root) {
            return 0;
        }
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    try {
        const trees = buildBinaryTree(n, leftChild, rightChild);
        const rootIndex = findRoot(leftChild, rightChild);
        if (rootIndex === -1) {
            throw Error('no root');
        }
        const tree = trees[rootIndex];
        const nodesInTree = countNodes(tree);
        if (nodesInTree !== n) {
            throw Error('not exact amount of nodes');
        }
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = validateBinaryTreeNodes;
