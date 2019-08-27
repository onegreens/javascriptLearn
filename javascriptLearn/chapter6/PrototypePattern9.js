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

var person1 = new Person();
var person2 = new Person();
person1.friends.push("wangwu");
person2.friends.push("zhaoliu");
console.info(person1.friends)
console.info(person2.friends)


