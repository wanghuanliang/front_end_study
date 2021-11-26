let camelize = function (str) {
  return str
    .split("-")
    .map((word, index) => {
      return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
};

// console.log(camelize("background-color"));

let filterRange = (arr, a, b) => {
  return arr.filter((item) => {
    return item >= a && item <= b;
  });
};
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1（匹配值）

// console.log(arr); // 5,3,8,1（未修改）

let filterRangeInPlace = (arr, a, b) => {
  arr = arr.filter((item) => {
    return item >= a && item <= b;
  });
};
function Calculator() {
  this.method = {
    "+": (a, b) => {
      return a + b;
    },
    "-": (a, b) => {
      return a - b;
    },
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.method[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.method[op](a, b);
  };

  this.addMethod = function (op, func) {
    this.method[op] = func;
  };
}
// let calc = new Calculator();

// console.log(calc.calculate("3 + 7")); // 10
