let ans = -1;
const midFind = (nums, start, end, target) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) {
    ans = mid;
  } else if (nums[mid] > target) {
    midFind(nums, start, mid - 1, target);
  } else if (nums[mid] < target) {
    midFind(nums, mid + 1, end, target);
  }
};
const search = function (nums, target) {
  midFind(nums, 0, nums.length - 1, target);
  return ans;
};

let nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
console.log(search(nums, target));
