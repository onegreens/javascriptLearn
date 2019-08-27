
/**
 * 稳妥构造函数模式
*/
function Person(name, age) {
    var o = new Object();
    //可以在这里定义私有变量和函数
    o.sayName = function () {
        console.info(name);//除了这个方法才能访问name属性
    }
    return o;
}