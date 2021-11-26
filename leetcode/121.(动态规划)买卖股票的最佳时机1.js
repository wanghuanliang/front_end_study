/**
 * @param {number[]} prices
 * @return {number}
 */
//方法一：动态规划，dp[i]存储第i天卖出股票的收益，min哨兵记录到第i天为止的最便宜价格
// var maxProfit = function(prices) {
//     let n = prices.length, dp = new Array(n), min = prices[0];
//     dp[0] = 0;
//     for (let i = 1; i < n; i++) {
//         if (prices[i] > min) {
//             dp[i] = prices[i] - min;
//         } else {
//             dp[i] = 0;
//             min = prices[i];
//         }
//     }
//     return Math.max(...dp);
// };
//优化，返回最大值，不用dp直接记录；
var maxProfit = function(prices) {
    let n = prices.length, min = prices[0], max = 0;
    for (let i = 1; i < n; i++) {
        if (prices[i] > min) {
            max = Math.max(prices[i] - min, max);
        } else {
            min = prices[i];
        }
    }
    return max;
};


const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));