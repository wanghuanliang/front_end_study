const p1 = Promise.resolve().then(() => {
  return 100;
});
console.log("p1", p1); //resolved触发后续then回调
p1.then(() => {
  console.log("123");
});

const p2 = Promise.resolve().then(() => {
  throw new Error("then error");
});
console.log("p2", p2); //rejected触发后续catch回调
p2.then(() => {
  console.log("456");
}).catch((err) => {
  console.log("err100", err);
});

//---------------------------------------
const p3 = Promise.reject("my error").catch((err) => {
  console.log("p3", err);
});
console.log("p3", p3); // resolved！！ 触发then回调
p3.then(() => {
  console.log(100);
});

const p4 = Promise.reject("my error").catch((err) => {
  throw new Error("catch err");
});
console.log("p4", p4); //rejected 触发catch回调
p4.then(() => {
  console.log(200);
}).catch(() => {
  console.log("some err");
});
