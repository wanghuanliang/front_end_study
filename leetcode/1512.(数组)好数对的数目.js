var numIdenticalPairs = function(nums) {
    let dic = new Array(101);
    let count = new Array(101).fill(0);
    let ans=0;
    for(let i=0;i<nums.length;i++) {
        count[nums[i]]++;
    }
    dic[0]=0;
    dic[1]=0;
    dic[2]=1;
    for(let i=3;i<101;i++){
        dic[i]=dic[i-1]+i-1;   //1+2+……(i-1)
    }
    for(let i=0;i<100;i++){
        ans += dic[ count[i] ];
    }
    return ans;
};

//0-100数据量较小，还是暴力速度快
const nums = [1,2,3,1,1,3];
// const nums = [1,1,1,1];
// const nums = [1,2,3];
console.log(numIdenticalPairs(nums));