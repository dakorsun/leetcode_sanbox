/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    function buildTreeFromArray(arr) {
        const treeMap = new Map();

        arr.forEach((hid, index) => {
            if (!treeMap.has(index)) {
                treeMap.set(index, {
                    headID: hid,
                    time: informTime[index],
                    children: [],
                });
            }

            if (hid !== -1) {
                if (!treeMap.has(hid)) {
                    treeMap.set(hid, {
                        headID: arr[hid],
                        time: informTime[hid],
                        children: [],
                    });
                }
                treeMap.get(hid).children.push(treeMap.get(index));
            }
        });

        const root = [...treeMap.values()].filter(
            (node) => node.headID === -1
        )[0];

        return root;
    }

    const tree = buildTreeFromArray(manager);

    let maxTime = -Infinity;

    function dfs(node, currentTime) {
        if (!node) return;

        currentTime += node.time;

        if (currentTime > maxTime) {
            maxTime = currentTime;
        }

        node.children.forEach((child) => {
            dfs(child, currentTime);
        });
    }

    dfs(tree, 0);

    return maxTime;
};

module.exports = numOfMinutes;
