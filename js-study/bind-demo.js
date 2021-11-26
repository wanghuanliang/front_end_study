//还需要考虑是否为function、null、不能用call、apply（直接把方法添加到指定的this上）
//模拟bind
Function.prototype.bind1 = function () {
  //将类数组的参数拆解为数组
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
  //获取绑定的this
  const t = args.shift() || globalThis;

  //fn1.bind(...)中的fn1
  const self = this;

  //返回一个函数
  return function () {
    return self.apply(t, args);
  };
};

//模拟call
Function.prototype.call1 = function () {
  const args = Array.prototype.slice.call(arguments);

  const t = args.shift() || globalThis;

  const self = this;

  const fn = self.bind(t, ...args);
  return fn();
};

//模拟apply
Function.prototype.apply1 = function () {
  const args = Array.prototype.slice.call(arguments);
  const t = args.shift();
  const self = this;
  const fn = self.bind(t, args);
  return fn();
};

function fn1(a, b, c) {
  console.log("this", this);
  console.log(a, b, c);
  return "this is fn1";
}

// console.log("call-demo");
// console.log(fn1.call1(null, 1, 2, 3));

// console.log("apply-demo");
// console.log(fn1.apply1({ x: 1 }, [1, 2, 3]));

console.log("bind-demo");
const fn2 = fn1.bind1(null, 1, 2, 3);
const res = fn2();
console.log(res);
