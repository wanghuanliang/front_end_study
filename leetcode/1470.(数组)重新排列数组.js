/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let ans = new Array(2 * n);
    let left = 0, right = n, mid = 0;
    for (let i = 0; i < n; i++) {
        ans[mid++] = nums[left + i];
        ans[mid++] = nums[right + i];
    }
    return ans;
};

const nums = [1,2,3,4,4,3,2,1], n = 4;
console.log(shuffle(nums, n));