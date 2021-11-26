var maximumWealth = function(accounts) {
    const n = accounts.length;
    let max=0;
    for(let i=0;i<n;i++){
        temp = 0;
        for(let j=0;j<accounts[i].length;j++){
            temp += accounts[i][j];
            max = Math.max(temp,max);
        }
    }
    return max;
};

//计算每个二维数组的一维和
accounts = [[2,8,7],[7,1,3],[1,9,5]]
console.log(maximumWealth(accounts));