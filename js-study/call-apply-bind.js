//手写call
Function.prototype.myCall = function (context, ...args) {
  //this必须为函数
  if (typeof this !== "function") {
    throw new TypeError("It is must be a function");
  }
  //context为null、undefined处理
  if (context == null) {
    context = globalThis;
  }
  //指定context唯一属性，并将执行函数设置为该属性方法
  const fn = Symbol();
  context[fn] = this;
  //执行
  const result = context[fn](...args);
  //删除symbol属性
  delete context[fn];
  return result;
};

//手写apply
Function.prototype.myApply = function (context, args = []) {
  if (typeof this !== "function") {
    throw new TypeError("It is must be a function");
  }
  if (context == null) {
    context = globalThis;
  }
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

//手写bind
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  if (typeof fn !== "function") {
    throw new TypeError("It is must a function");
  }
  if (context == null) {
    context = globalThis;
  }
  return function (...otherArgs) {
    return fn.apply(context, [...args, ...otherArgs]);
  };
};

function fn1(a, b, c) {
  console.log("this x", this.x);
  console.log(a, b, c);
  return "this is fn1";
}

console.log("call-demo");
console.log(fn1.myCall({ x: 1 }, 1, 2, 3));

console.log("apply-demo");
console.log(fn1.myApply({ x: 1 }, [1, 2, 3]));

console.log("bind-demo");
const fn2 = fn1.myBind({ x: 1 }, 1, 2, 3);
const res = fn2();
console.log(res);
