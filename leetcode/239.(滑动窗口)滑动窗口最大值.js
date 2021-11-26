//方法一：暴力，优化
var maxSlidingWindow = function (nums, k) {
    let ans = new Array();
    var findMax = function (nums, left, right) {
        let max = nums[left];
        for (let i = left + 1; i < right; i++) {
            if (nums[i] > max)
                max=nums[i];
        }
        return max;
    }
    
    let max = findMax(nums, 0, k);
    ans.push(max);
    for(let left = 1, right = k+1; right <= nums.length; left++, right++) {
        //如果新增值为最大值，直接覆盖
        if( nums[right-1] >= max) {
            max = nums[right-1];
            ans.push(max);
        }
        //如果最大值未被移除，则用上次max
        else if( nums[left-1] != max) {
            ans.push(max);
        }
        //否则，重新计算一遍
        else {
            max = findMax(nums,left,right);
            ans.push(max);
        }
    }

    return ans;
};

//方法二：最大推存当前的滑动窗口

//方法三：！单调队列

// const nums = [1,3,-1,-3,5,3,6,7], k = 3;
// const nums = [1], k = 1;
const nums = [9, 11], k = 2;
// const nums = [4,-2], k = 2;
console.log(maxSlidingWindow(nums, k));