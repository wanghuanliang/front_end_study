/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//方法一：暴力,O(k*length)
// var rotate = function(nums, k) {
//     let temp, n=nums.length;
//     while(k--) {
//         temp = nums[n-1];
//         for(let i = n -1; i > 0; i--) {
//             nums[i] = nums[i-1]
//         }
//         nums[0] = temp;
//     }
//     return nums;
// };

//方法二：环状替换，直接更新最后一次，O(length),需要仔细,循环最大公约数次
//辗转相除法求最大公约数
const gcd = (x, y) => y ? gcd(y, x % y) : x;

var rotate = function(nums, k) {
    let n = nums.length, now, before, after;
    for (let start = 0; start < gcd(n, k); start++) {
        before = nums[start];
        now = start;
        do {
            now = (now + k) % n;
            after = nums[now];
            nums[now] = before;
            console.log(now);
            before = after;
        }while (now != start) 
    } 

    return nums;
};

//方法三：数组翻转，巧妙！！！
// var change = function(nums, start, end) {
//     let temp;
//     while(start < end) {
//         temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
// }

// var rotate = function(nums, k) {
//     k = k % nums.length;    //有可能k很大
//     change(nums, 0, nums.length - 1);
//     change(nums, 0, k-1);
//     change(nums, k, nums.length - 1);
//     return nums;
// }


const nums = [-1,-100,3,99], k = 2;
console.log(rotate(nums,k));

