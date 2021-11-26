/**
 * @param {number[]} prices
 * @return {number}
 */
//方法一：一次股票操作动态规划，循环n次，O(n2)，超时
// var getDp = function (prices, dp, start, end) {
//     let min = prices[start];
//     dp[start] = 0;
//     for (let j = start; j < end; j++) {
//         if (prices[j] > min) {
//             dp[j] = prices[j] - min;
//         } else {
//             min = prices[j];
//             dp[j] = 0;
//         }
//     }
// }
// var maxProfit = function (prices) {
//     let n = prices.length, dp = new Array(n), ans = new Array(n), min = 0, get;
//     getDp(prices, dp, 0, n);
//     ans[0] = Math.max(...dp);
//     for (let i = 1; i < n; i++) {
//         getDp(prices, dp, 0, i);
//         getDp(prices, dp, i, n);
//         ans[i] = Math.max(...dp.slice(0, i)) + Math.max(...dp.slice(i, n));
//     }
//     // console.log(ans);
//     return Math.max(...ans);
// };

//方法二：维护4个动态数组，即第i天结束时，已经买入一次，已经买入卖出一次，已经买入卖出买入，已经买入卖出买入卖出
//时间复杂度O(n),空间复杂度O(n)优化到O(1)
var maxProfit = function (prices) {
    let buy1 = -prices[0], sell1 = 0, buy2 = -prices[0], sell2 = 0;
    for(let i = 1; i< prices.length; i++) {
        buy1 = Math.max(buy1, -prices[i]);
        sell1 = Math.max(sell1, buy1 + prices[i]);
        buy2 = Math.max(buy2, sell1 - prices[i]);
        sell2 = Math.max(sell2, buy2 + prices[i]);
    }
    return sell2;
};


const prices = [3,3,5,0,0,3,1,4];
// const prices = [1, 2, 3, 4, 5];
// const prices = [7,6,4,3,1];
// const prices = [1];
console.log(maxProfit(prices));

