var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let jArr = jewels.split('');
    let sArr = stones.split('');
    for (let i = 0; i < sArr.length; i++) {
        let flag = 0;
        for (let j = 0; j < jArr.length; j++) {
            if(sArr[i] == jArr[j]){
                flag=true;
                break;
            }
        }
        if(flag){
            count++;
        }
    }
    return count;
};
//普通模拟，二重循环，效率较低

// const J = "aA", S = "aAAbbbb"
const J = "z", S = "ZZ"
console.log(numJewelsInStones(J,S));