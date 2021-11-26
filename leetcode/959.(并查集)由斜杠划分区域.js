/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  let n = grid.length;
  let f = new Array(4 * n * n).fill(0).map((element, index) => {
    return index;
  });

  //并查
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let pos = i * n + j;
      if (i < n - 1) {
        merge(f, 4 * pos + 2, 4 * (pos + n));
      }
      if (j < n - 1) {
        merge(f, 4 * pos + 1, 4 * (pos + 1) + 3);
      }
      if (grid[i][j] === " ") {
        merge(f, 4 * pos, 4 * pos + 1);
        merge(f, 4 * pos + 1, 4 * pos + 2);
        merge(f, 4 * pos + 2, 4 * pos + 3);
      } else if (grid[i][j] === "/") {
        merge(f, 4 * pos, 4 * pos + 3);
        merge(f, 4 * pos + 1, 4 * pos + 2);
      } else if (grid[i][j] === "\\") {
        merge(f, 4 * pos, 4 * pos + 1);
        merge(f, 4 * pos + 2, 4 * pos + 3);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < 4 * n * n; i++) {
    if (f[i] === i) ans++;
  }
  return ans;
};

const find = (f, x) => {
  while (x !== f[x]) {
    x = f[x];
  }
  return x;
};

const merge = (f, x, y) => {
  let fx = find(f, x),
    fy = find(f, y);
  f[fx] = fy;
};
