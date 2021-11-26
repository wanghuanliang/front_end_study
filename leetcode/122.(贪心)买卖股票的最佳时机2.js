/**
 * @param {number[]} prices
 * @return {number}
 */

//方法一：贪心，有赚就买
// var maxProfit = function (prices) {
//     let ans = 0, min = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > min) {
//             ans += prices[i] - min;
//             min = prices[i];
//         } else {
//             min = prices[i];
//         }
//     }
//     return ans;
// };
//优化，min始终为上一个价格，即区间大于0的都加上即可
var maxProfit = function (prices) {
    let ans = 0;
    for(let i = 1; i < prices.length; i++) {
        ans += Math.max(0, prices[i] - prices[i-1]);
    }
    return ans;
}
//方法二：动态规划，空间效率低
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));