/**
 * @param {string} s
 * @return {string}
 */
//暴力
// var longestPalindrome = function (s) {
//   let judge = function (s) {
//     let n = s.length;
//     for (let i = 0; i < (n - 1) / 2; i++) {
//       if (s[i] !== s[n - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   for (let i = s.length; i > 0; i--) {
//     for (let j = 0; j <= s.length - i; j++) {
//       let sub = s.slice(j, i + j);
//       if (judge(sub)) {
//         return sub;
//       }
//     }
//   }
// };

// //动态规划
// var longestPalindrome = function (s) {
//   let len = s.length;
//   //初始化二维数组
//   let dp = new Array(len).fill(0).map((x) => new Array(len).fill(true));

//   let maxLen = 1,
//     begin = 0;
//   //填充dp数组
//   for (let subLen = 2; subLen <= len; subLen++) {
//     for (let i = 0; i < len; i++) {
//       let j = i + subLen - 1;
//       if (j > len - 1) break;
//       if (s[i] === s[j]) {
//         if (subLen === 2) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = dp[i + 1][j - 1];
//         }
//       } else {
//         dp[i][j] = false;
//       }

//       //填充数组时统计
//       if (dp[i][j] && j - i + 1 > maxLen) {
//         maxLen = j - i + 1;
//         begin = i;
//       }
//     }
//   }

//   //输出
//   return s.slice(begin, begin + maxLen);
// };

//中心扩展算法
var longestPalindrome = function (s) {
  let len = s.length;

  let expand = function (s, left, right) {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  let begin = 0,
    maxLen = 1;
  for (let i = 0; i < len; i++) {
    let [left1, right1] = expand(s, i, i);
    let [left2, right2] = expand(s, i, i + 1);
    if (right1 - left1 + 1 > maxLen) {
      begin = left1;
      maxLen = right1 - left1 + 1;
    }
    if (right2 - left2 + 1 > maxLen) {
      begin = left2;
      maxLen = right2 - left2 + 1;
    }
  }
  return s.slice(begin, begin + maxLen);
};

//中心扩散算法2
var longestPalindrome = function (s) {
  let len = s.length;

  let expand = function (s, mid) {
    let start = Math.floor(mid),
      end = Math.ceil(mid);
    while (start <= end && start >= 0 && end < len && s[start] === s[end]) {
      start--;
      end++;
    }
    return [start + 1, end - 1];
  };

  let begin = 0,
    maxLen = 1;
  for (let mid = 0; mid <= len - 1; mid += 0.5) {
    let [left, right] = expand(s, mid);
    if (right - left + 1 > maxLen) {
      begin = left;
      maxLen = right - left + 1;
    }
  }

  return s.slice(begin, begin + maxLen);
};

console.log(longestPalindrome("ababa"));
