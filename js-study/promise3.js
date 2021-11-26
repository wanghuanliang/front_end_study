const p1 = Promise.resolve(100);

p1.then((data) => console.log("data1", data)).catch((err) =>
  console.log("err1", err)
);

const p2 = Promise.reject("err");
p2.then((data) => console.log("data2", data)).catch((err) =>
  console.log("err2", err)
);
