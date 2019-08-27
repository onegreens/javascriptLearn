/** 
 * 寄生组合式继承
 */
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
/**
 * 通过借用构造函数来继承属性,通过原型链的混成形式来继承方法
 * 
 * 不必为了指定子类型的原型而调用超类型的构造函数
 * @param {*} subType 
 * @param {*} superType 
 */
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

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

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.info(this.age)
}




