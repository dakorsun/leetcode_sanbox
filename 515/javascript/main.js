function layerDoubleIndex(li, ni) {
    return `${li}-${ni}`;
}
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function buildTree(nodes) {
    const layers = [[nodes[0]]];
    let layerIndex = 1;
    while (Math.pow(2, layerIndex) < nodes.length) {
        const sliceStart = Math.pow(2, layerIndex) - 1;
        const sliceEnd = Math.pow(2, (layerIndex = layerIndex + 1)) - 1;
        layers.push(nodes.slice(sliceStart, sliceEnd));
    }

    const treeMap = new Map();

    layers.forEach((layer, li) => {
        layer.forEach((node, ni) => {
            const doubleIndex = layerDoubleIndex(li, ni);
            if (!treeMap.has(doubleIndex)) {
                treeMap.set(doubleIndex, new TreeNode(node));
            }
            if (li > 0) {
                const parentIndex = getParentIndex(ni);
                const parentDoubleIndex = layerDoubleIndex(li - 1, parentIndex);
                if (ni % 2 === 0) {
                    treeMap.get(parentDoubleIndex).left =
                        treeMap.get(doubleIndex);
                } else {
                    treeMap.get(parentDoubleIndex).right =
                        treeMap.get(doubleIndex);
                }
            }
        });
    });
    const root = treeMap.get('0-0');
    return root;
}

function getParentIndex(ni) {
    return (ni + 1 + ((ni + 1) % 2)) / 2 - 1;
}

//=====================================
//=====================================
//=====================================
//=====================================
//=====================================

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    const allValuesLayered = [];
    writeNodeValue(root, 0, allValuesLayered);
    const result = allValuesLayered.map((layer) =>
        layer.reduce((largest, val) => (largest > val ? largest : val))
    );
    return result;
};

function writeNodeValue(node, depth, arr) {
    if (!node) {
        return;
    }

    if (!arr[depth]) arr[depth] = [];
    arr[depth].push(node.val);
    if (node.left) writeNodeValue(node.left, depth + 1, arr);
    if (node.right) writeNodeValue(node.right, depth + 1, arr);
}

module.exports = { largestValues, buildTree };
