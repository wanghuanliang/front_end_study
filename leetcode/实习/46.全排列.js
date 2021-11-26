/**
 * 回溯
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [],
    used = [];

  function dfs(path) {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for (const num of nums) {
      if (used[num]) {
        continue;
      }
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }

  dfs([]);
  return result;
};

console.log(permute([1, 2, 3]));
