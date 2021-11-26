// //get
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "/test.json", true); //第三次参数true表示异步
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       alert(xhr.responseText);
//     } else {
//       console.log("其他情况");
//     }
//   }
// };
// xhr.send(null);
// //post
// const xhr = new XMLHttpRequest();
// xhr.open("post", "/login", true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       alert(xhr.responseText);
//     } else {
//       console.log("其他情况");
//     }
//   }
// };
// const postData = {
//   userName: "whl",
//   password: "xxx",
// };
// xhr.send(JSON.stringify(postData));

//手写简易ajax
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject(new Error("404 not found"));
        }
      }
    };
    xhr.send(null);
  });
  return p;
}
//使用
ajax("./test.json")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
