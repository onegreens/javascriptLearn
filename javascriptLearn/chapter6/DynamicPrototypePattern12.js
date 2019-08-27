
/**
 * 动态原型模式
*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    if (typeof this.sayName != "function") {
        this.sayName = function () {
            console.info(this.name);
        }
    }
}