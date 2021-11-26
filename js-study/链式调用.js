//创建一个bird类
function Bird(name) {
  this.name = name;
  this.run = function () {
    document.write(name + " " + "start run;");
    return this; // return this返回当前调用方法的对象。
  };
  this.stopRun = function () {
    document.write(name + " " + "start run;");
    return this;
  };
  this.sing = function () {
    document.write(name + " " + "start sing;");
    return this;
  };
  this.stopSing = function () {
    document.write(name + " " + "start stopSing;");
    return this;
  };
}
