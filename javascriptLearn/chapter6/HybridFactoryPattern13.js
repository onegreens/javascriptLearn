
/**
 * 寄生构造函数模式
 * 
 * 创建一个函数,该函数的作用仅仅是封装创建对象的代码,然后再返回新创建的对象
 * 
 * 返回的对象与构造函数或者与构造函数的原型对象之间没有关系
*/
function Person(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.info(this.name);
    }
    return o;
}