/**
 * 原型的动态性
 */
function Person() { }
var friend = new Person();
Person.prototype.sayHi = function () {
    console.info("hi");
}
friend.sayHi();//存在


