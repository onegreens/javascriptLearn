
/* 
借用构造函数
 在子类型构造函数的内部调用超类型构造函数

方法都在构造函数中定义,函数无法复用
*/
function SuperType() {
    this.colors = ["red", "blue", "green"]
}

function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black")

var instance2 = new SubType();
console.info(instance1.colors);
console.info(instance2.colors);