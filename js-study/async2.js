// async function fn1() {
//   return 100;
// }

// const res1 = fn1(); //执行async函数，返回的是一个promise对象
// console.log(res1);
// res1.then((data) => {
//   console.log(data);
// });

// !(async function () {
//   const p1 = Promise.resolve(300);
//   const data = await p1; //await相当于Promise的then
//   console.log("data", data);
// })();

// !(async function () {
//   const data1 = await 400;
//   console.log("data1", data1);
// })();

// !(async function () {
//   const data2 = await fn1();
//   console.log("data2", data2);
// })();

// !(async function () {
//   const p4 = Promise.reject("err1");
//   try {
//     const res = await p4;
//     console.log(res);
//   } catch (ex) {
//     console.log(ex); //try...catch相当于promise catch
//   }
// })();
