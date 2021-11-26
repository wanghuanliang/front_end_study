class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
  }

  get(index) {
    return this[index];
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }

  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false);
    });
  }

  //扩展很多DOM API
}

//插件 (不建议)
jQuery.prototype.dialog = function (info) {
  alert(info);
};

//复写（造轮子）
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }
  //扩展自己的方法
}

// const $div = new jQuery("div");
// $div.get(1);
// $div.each((elem) => console.log(elem.nodeName));
// $div.on("click", () => alert("clicked"));
