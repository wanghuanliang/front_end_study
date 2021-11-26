// /**
//  * @param {string} s
//  * @param {number[][]} pairs
//  * @return {string}
//  */
// class UnionFind {
//     constructor(n) {
//         this.parents = new Uint32Array(n)
//         this.ranks = new Uint32Array(n)
//         while (n--) this.parents[n] = n
//     }
//     union(x, y) {
//         const rootX = this.find(x), rootY = this.find(y)
//         if (rootX !== rootY) {
//             const t = this.ranks[rootX] - this.ranks[rootY]
//             if (t <= 0) {
//                 this.parents[rootX] = rootY
//                 if (t === 0) this.ranks[rootY]++
//             } else
//                 this.parents[rootY] = rootX
//         }
//     }
//     find(x) {
//         while (x !== this.parents[x]) x = this.parents[x]
//         return x
//     }
// }
// var smallestStringWithSwaps = function (s, pairs) {
//     let unionFind = new UnionFind(s.length), i = pairs.length, h = new Map, r = ''
//     while (i--) unionFind.union(pairs[i][0], pairs[i][1])
//     while (++i < s.length) {
//         const rootI = unionFind.find(i)
//         if (!h.has(rootI)) h.set(rootI, [])
//         h.get(rootI).push(s[i])
//     }
//     h.forEach((v, k) => h.set(k, v.sort((a, b) => b.charCodeAt() - a.charCodeAt())))
//     for (i = 0; i < s.length; i++) {
//         const rootI = unionFind.find(i)
//         r += h.get(rootI).pop()
//     }
//     return r

// };

// var smallestStringWithSwaps = function(s, pairs) {
//     const fa = new Array(100010).fill(0);

//     const find = (x) => {
//         return x === fa[x] ? x : fa[x] = find(fa[x]);
//     }

//     const n = s.length;
//     for (let i = 0; i < n; i++) {
//         fa[i] = i;
//     }
//     for (let i = 0; i < pairs.length; ++i) {
//         const x = pairs[i][0], y = pairs[i][1];
//         const ux = find(x), uy = find(y);
//         if (ux ^ uy) {
//             fa[ux] = uy;
//         }
//     }

//     const vec = new Array(n).fill(0).map(() => new Array());
//     for (let i = 0; i < n; i++) {
//         fa[i] = find(i);
//         vec[fa[i]].push(s[i]);
//     }

//     for (let i = 0; i < n; ++i) {
//         if (vec[i].length > 0) {
//             vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt());
//         }
//     }
//     const p = new Array(n).fill(0);
//     let ans = [];
//     for (let i = 0; i < n; ++i) {
//         ans.push('1');
//     }

//     for (let i = 0; i < n; ++i) {
//         ans[i] = vec[fa[i]][p[fa[i]]];
//         p[fa[i]]++;
//     }

//     return ans.join('');
// };

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let n = s.length;
  const f = new Array(n).fill(0).map((x, index) => index);

  //并查
  for (let i = 0; i < pairs.length; i++) {
    union(f, pairs[i][0], pairs[i][1]);
  }

  //哈希映射
  const map = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < n; i++) {
    map[find(f, i)].push(s[i]);
  }
  //排序
  for (let item of map) {
    item.sort((a, b) => a.charCodeAt() - b.charCodeAt());
  }

  //计算结果
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += map[find(f, i)].shift();
  }
  return ans;
};

const find = (f, x) => {
  while (x !== f[x]) {
    f[x] = f[f[x]]; //优化，将并查集的树高度降低
    x = f[x];
  }
  return x;
};

const union = (f, x, y) => {
  let rootX = find(f, x),
    rootY = find(f, y);
  f[rootX] = rootY;
  f[x] = rootY; //优化，顺便把当前节点连接到根结点上
};

let s = "dcab",
  pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ];

console.log(smallestStringWithSwaps(s, pairs));
