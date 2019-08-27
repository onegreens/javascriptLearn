
/**组合使用构造函数和原型模式 
 * 每个实例都会有自己的一份实例属性的副本
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.info(this.name);
    }
}