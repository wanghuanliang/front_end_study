/**
 * 深拷贝
 * @param {Object}
 */
function deepClone(obj = {}) {
  //obj为值类型，直接返回
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  //初始化返回结果
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    //保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      //递归调用
      result[key] = deepClone(obj[key]);
    }
  }

  //返回结果
  return result;
}

let obj1 = {
  name: "whl",
  age: 18,
  addr: {
    x: 10,
    y: 20,
  },
};

// let obj2 = obj1;
let obj2 = deepClone(obj1);
obj2.age = 100;
console.log(obj1);
