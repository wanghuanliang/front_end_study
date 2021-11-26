/*------------------------------------------------------------------------*/
//归并排序
function mergeSort(nums, left, right) {
  if (left >= right) {
    return nums;
  }
  let mid = (left + right) >> 1;
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  return merge(nums, left, mid, right);
}
function merge(nums, left, mid, right) {
  let ans = [],
    i = left,
    j = mid + 1,
    now = 0;
  while (i <= mid && j <= right) {
    if (nums[i] < nums[j]) {
      ans[now++] = nums[i++];
    } else {
      ans[now++] = nums[j++];
    }
  }
  while (i <= mid) {
    ans[now++] = nums[i++];
  }
  while (j <= right) {
    ans[now++] = nums[j++];
  }
  for (let i = 0; i < ans.length; i++) {
    nums[left + i] = ans[i];
  }
  return nums;
}
/*------------------------------------------------------------------------*/
//快速排序
function quickSort(nums, left, right) {
  if (left >= right) {
    return nums;
  }
  let pivotIndex = partition(nums, left, right);
  quickSort(nums, left, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, right);
  return nums;
}
//随机选主元，交换到最右边
function partition(nums, left, right) {
  let pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
  [nums[right], nums[pivotIndex]] = [nums[pivotIndex], nums[right]];
  let i = left,
    j = right - 1,
    pivot = nums[right];
  while (i <= j) {
    if (nums[i] > pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
    } else {
      i++;
    }
  }
  j++;
  [nums[j], nums[right]] = [nums[right], nums[j]];
  return j;
}
//左边为基准
// function partition(nums, left, right) {
//   let pivot = nums[left],
//     i = left + 1,
//     j = right;
//   while (i <= j) {
//     if (nums[i] > pivot) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       j--;
//     } else {
//       i++;
//     }
//   }
//   [nums[left], nums[j]] = [nums[j], nums[left]]; //交换到前面的用小的值
//   return j;
// }
//右边为基准
// function partition(nums, left, right) {
//   let pivot = nums[right],
//     i = left,
//     j = right - 1;
//   while (i <= j) {
//     if (nums[i] > pivot) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       j--;
//     } else {
//       i++;
//     }
//   }
//   j++; //因为j之后元素一定保证比pivot大，交换到后面的需要大的值
//   [nums[j], nums[right]] = [nums[right], nums[j]];
//   return j;
// }
//中间为基准，先交换到最右边

/*------------------------------------------------------------------------*/

/**
 * @param {number[]} nums
 */
function sort(nums) {
  // return mergeSort(nums, 0, nums.length - 1);
  return quickSort(nums, 0, nums.length - 1);
}

let nums = [7, 5, 8, 3, 2, 1, 6, 2];
// let nums = [1, 2, 3];
console.log(sort(nums));
