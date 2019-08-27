/*用一个而包含所有属性的方法的对象字面量来重写整个原型对象*/
function Person() { }
Person.prototype = {
    name: "ave",
    age: 1,
    sayName: function () {
        console.info(this.name)
    }
}

/**constructor属性也变成了新对象的constructor属性，不再指向原对象-Persion */