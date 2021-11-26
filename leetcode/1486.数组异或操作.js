/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let ans = start;
    for (let i = 1; i < n; i++) {
        ans = ans ^ (start + 2* i)
    }
    return ans;
};

const n = 5, start = 0;
console.log(xorOperation(n,start));