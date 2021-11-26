var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}
console.log("abc" + myObject.fullName());          // 返回 [object Object] (所有者对象)

function myFunction() {

}
myFunction();

function add(a, b) {
    console.log(a+b);
}

function run(a, b, callback) {
    callback(a, b);
}

run(1, 2, add);