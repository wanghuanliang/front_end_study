var runningSum = function(nums) {
    const n = nums.length;
    const arr = new Array(n);
    arr[0] = nums[0];
    for(let i=1;i<n;i++){
        arr[i] = arr[i-1] + nums[i];
    }
    return arr;
};
//arr改用nums存储，节省空间
const nums=[]