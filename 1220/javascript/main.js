/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    if (n === 1) {
        return 5;
    }

    let a = 1,
        e = 1,
        i = 1,
        o = 1,
        u = 1;
    const mod = 1000000007;

    for (let step = 2; step <= n; step++) {
        const newA = (e + u + i) % mod;
        const newE = (a + i) % mod;
        const newI = (e + o) % mod;
        const newO = i;
        const newU = (i + o) % mod;

        a = newA;
        e = newE;
        i = newI;
        o = newO;
        u = newU;
    }

    return (a + e + i + o + u) % mod;
};

module.exports = countVowelPermutation;
