/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//深搜
const dfs = (root, prevSum) => {
  if (root === null) {
    return 0;
  }
  let sum = prevSum * 10 + root.val;
  if (root.left === null && root.right === null) {
    return sum;
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
};

var sumNumbers = function (root) {
  return dfs(root, 0);
};

//深搜2，前序遍历
// var sumNumbers = function (root) {
//   let result = 0;

//   function dfs(root, prevSum) {
//     if (root === null) {
//       return;
//     }
//     let sum = prevSum * 10 + root.val;
//     if (root.left === null && root.right === null) {
//       //到根节点，加到和内
//       result += sum;
//     } else {
//       dfs(root.left, sum);
//       dfs(root.right, sum);
//     }
//   }

//   dfs(root, 0);
//   return result;
// };

// //广搜 两个队列 其中一个记录到达每个节点的值
// var sumNumbers = function (root) {
//   if (root === null) {
//     return 0;
//   }
//   let result = 0;
//   const nodeQueue = [];
//   const numQueue = [];
//   nodeQueue.push(root);
//   numQueue.push(root.val);
//   while (nodeQueue.length) {
//     const node = nodeQueue.shift();
//     const num = numQueue.shift();
//     if (node.left === null && node.right === null) {
//       result += num;
//     } else {
//       if (node.left !== null) {
//         nodeQueue.push(node.left);
//         numQueue.push(num * 10 + node.left.val);
//       }
//       if (node.right !== null) {
//         nodeQueue.push(node.right);
//         numQueue.push(num * 10 + node.right.val);
//       }
//     }
//   }
//   return result;
// };

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

console.log(sumNumbers(root));
