
/* 原型问题
    引用类型值的原型共享
    在创建子类型的实例时,不能向超类的构造函数中传递参数
*/
function SuperType() {
    this.colors = ["red", "blue", "green"]
}

function SubType() {
}
//继承SuperType
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black")

var instance2 = new SubType();
console.info(instance1.colors);
console.info(instance2.colors);