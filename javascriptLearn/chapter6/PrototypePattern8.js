/**
 * 原型的动态性
 * 当重写整个原型对象时
 */
function Person() { }
var friend = new Person();
Person.prototype = {
    constructor: Person,
    name: "ave",
    age: 1,
    sayName: function () {
        console.info(this.name)
    }
}
friend.sayName();//不存在 error

/**实例中的指针仅指向原型,而不指向构造函数 */


