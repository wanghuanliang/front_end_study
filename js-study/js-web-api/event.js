//通用的事件绑定函数
// function bindEvent(elem, type, fn) {
//   elem.addEventListener(type, fn);
// }

//支持事件代理的事件绑定函数
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }
  elem.addEventListener(type, (event) => {
    const target = event.target;
    if (selector) {
      //代理绑定
      if (target.matches(selector)) {
        fn.call(target, event);
      }
    } else {
      //普通绑定
      fn.call(target, event);
    }
  });
}

//普通绑定
const btn1 = document.getElementById("btn1");
bindEvent(btn1, "click", function (event) {
  console.log(event.target); //获取触发的元素
  event.preventDefault(); //阻止默认行为
  alert(this.innerHTML);
});

//代理绑定
const div3 = document.getElementById("div3");
bindEvent(div3, "click", "a", function (event) {
  event.preventDefault();
  alert(this.innerHTML);
});
