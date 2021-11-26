var longestMountain = function (A) {
    if (A.length < 3)
        return 0;
    let L, R, ans = 0;
    for (let i = 1; i < A.length - 1;) {
        L = i - 1, R = i + 1;
        if (A[L] < A[i] && A[i] > A[R]) {
            while (L > 0 && A[L - 1] < A[L]) {
                L--;
            }
            while (R < A.length - 1 && A[R ] > A[R + 1]) {
                R++;
            }
            ans = Math.max(ans, R - L + 1); //放出去最小为3了
        }
        //ans = Math.max(ans, R - L + 1);
        i = R;  //优化：下一次直接从R出发判断
    }
    return ans;
}

var A = [0,1,2,3,4,2];

console.log(longestMountain(A));


// // 9种情况模拟，有bug，不方便
// var longestMountain = function (A) {
//     if(A.length < 3){
//         return 0;
//     }
//     let maxLength = 0, length = 0, up = 0, top=0;
//     for (let i = 0; i < A.length - 1; i++) {
//         let a = A[i], b = A[i + 1];
//         if (a < b) {
//             if (up == 1) {
//                 length++;
//             }
//             else if (up == 0) {
//                 maxLength = length > maxLength ? length : maxLength;
//                 length = 1;
//             }
//             else if (up == -1) {
//                 length++;
//                 maxLength = length > maxLength ? length : maxLength;
//                 length = 1;
//             }
//             up = 1;
//         } 
//         else if (a == b) {
//             if (up == 1) {
//                 length++;
//                 maxLength = length > maxLength ? length : maxLength;
//                 length = 0;
//             }
//             else if (up == 0) {
//                 length = 0;
//             }
//             else if (up == -1) {
//                 length++;
//                 maxLength = length > maxLength ? length : maxLength;
//                 length = 0;
//             }
//             up = 0;
//         } 
//         else if (a > b){
//             if (up == 1) {
//                 length++;
//             }
//             else if (up == 0) {
//                 length = 0;
//             }
//             else if (up == -1) {
//                 length++;
//             }
//             up = -1;
//         } 

//     }
//     //最后两个数字再对比一次
//     if(up == -1 && A[A.length-2] > A[A.length-1]){
//         length++;
//         maxLength = length > maxLength ? length : maxLength;
//     }
//     return maxLength;  
// };

// console.log(longestMountain(A));

// var temp = 2>3?12:22;
// console.log(temp);