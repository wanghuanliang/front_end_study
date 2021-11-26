const input1 = document.getElementById("input1");
// let timer = null;
// input1.addEventListener("keyup", function () {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(() => {
//     //触发事件
//     console.log(input1.value);

//     //清空定时器
//     timer = null;
//   }, 500);
// });

//防抖
function debounce(fn, delay = 500) {
  //timer是在闭包中
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null; //执行完之后释放定时器
    }, delay);
  };
}

//使用
input1.addEventListener(
  "keyup",
  debounce(function () {
    console.log(input1.value);
  }, 300)
);
