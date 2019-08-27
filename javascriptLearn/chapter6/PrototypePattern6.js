/*用一个而包含所有属性的方法的对象字面量来重写整个原型对象*/
function Person() { }
Person.prototype = {
    constructor: Person,
    name: "ave",
    age: 1,
    sayName: function () {
        console.info(this.name)
    }
}

/**重新设定constructor属性*/