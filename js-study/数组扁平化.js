let res = [];
const flatten = (arr) => {
  arr.forEach((item) => {
    if (item instanceof Array) {
      flatten(item);
    } else {
      res.push(item);
    }
  });
};
let arr = [1, [7, 8], [2, 3, [4, 5]]];
flatten(arr);
console.log(res);
