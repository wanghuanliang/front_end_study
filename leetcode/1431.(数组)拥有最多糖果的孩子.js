var kidsWithCandies = function(candies, extraCandies) {
    let ans = new Array();
    let max = Math.max(...candies);
    for(let i=0;i<candies.length;i++){
        if(candies[i] + extraCandies < max){
            ans.push(false);
        }else {
            ans.push(true);
        }
    }
    return ans;
};

const candies = [2,3,5,1,3], extraCandies = 3
console.log(kidsWithCandies(candies,extraCandies));