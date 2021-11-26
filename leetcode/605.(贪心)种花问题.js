//方法一：找规律
////：两边的情况，可以看成多一个0的情况，这样只要考虑一种情况即可
// var canPlaceFlowers = function (flowerbed, n) {
//     let ans = 0;
//     var car = function (arr, left, right) {
//         let max = 0;
//         let num = 0;
//         for (let i = left; i < right; i++) {
//             if (arr[i] == 0) {
//                 num++
//             } else {
//                 max += parseInt((num - 1) / 2);
//                 num = 0;
//             }
//         }
//         return max;
//     }
//     //边1
//     if (flowerbed[0] == 1 && flowerbed[flowerbed.length - 1] == 1) {
//         ans = car(flowerbed, 0, flowerbed.length);
//     } else {
//         let allZero = 1;
//         let leftZero = 0;
//         let rightZero = 0;
//         let left = 0;
//         let right = flowerbed.length;
//         for (let i = 0; i < flowerbed.length; i++) {
//             if (flowerbed[i] == 1) {
//                 allZero = 0;
//                 left = i;
//                 break;
//             } else {
//                 leftZero++;
//             }
//         }
//         //全0
//         if (allZero == 1) {
//             ans = parseInt((flowerbed.length + 1) / 2);
//         }
//         //有边0
//         else {
//             for (let i = flowerbed.length - 1; i >= 0; i--) {
//                 if (flowerbed[i] == 1) {
//                     right = i + 1;
//                     break;
//                 } else {
//                     rightZero++;
//                 }
//             }
//             ans = parseInt(leftZero / 2) + parseInt(rightZero / 2) + car(flowerbed, left, right);

//         }

//     }
//     // return ans;
//     return ans >= n;
// };

//方法二：贪心
//可以用n--代替max，提高效率
var canPlaceFlowers = function (flowerbed, n) {
    let max = 0;
    flowerbed.unshift(0)
    flowerbed.push(0);
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            flowerbed[i] = 1;
            max++;
        }
    }

    return max >= n;
}

// const flowerbed = [1,0,0,0,1], n = 1;
// const flowerbed = [1, 0, 0, 0, 1], n = 2
// const flowerbed = [0], n = 1; 
console.log(canPlaceFlowers(flowerbed, n));