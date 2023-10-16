/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
    var graph = Array(n)
            .fill(null)
            .map(() => []),
        cache = new Uint32Array(n);
    relations.forEach(([a, b]) => graph[a - 1].push(b - 1));

    var dfs = (i) => {
        if (cache[i]) return cache[i];
        return (cache[i] =
            graph[i].reduce((a, b) => Math.max(a, dfs(b)), 0) + time[i]);
    };

    return cache.reduce((a, _, i) => Math.max(a, dfs(i)), 0);
};

module.exports = minimumTime;
