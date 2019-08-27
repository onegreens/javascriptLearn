/**
 * 
 *原型对象的问题-引用值共享 
 */
function Person() { }
Person.prototype = {
    constructor: Person,
    name: "ave",
    age: 1,
    friends: ["zhangsan", "lisi"],
    sayName: function () {
        console.info(this.name)
    }
}
Object.defineProperty(Person.prototype,"constuctor",{
    enumerable:false,
    value:Persion
})


