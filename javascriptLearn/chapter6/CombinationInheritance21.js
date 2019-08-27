/** 组合继承
 * 
 * 避免了原型链和借用构造函数的缺陷
 */

function SuperType(name) {
    this.name = name;
    this.color = ["red", "blue", "green"]
}

SuperType.prototype.sayName = function () {
    console.info(this.name);
}

function SubType(name, age) {
    //继承属性
    SuperType.call(this, name);
    this.age = age;
}
//继承原型方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    console.info(this.age);
}

var instance = new SubType("lisi",23);
instance.sayName();