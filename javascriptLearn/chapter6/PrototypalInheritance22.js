/** 
 * 原型式继承
 * 
 * 要求必须有一个对象作为另外一个对象的基础
 */
var person = {
    name: "lisi",
    friends: ["tom", "hoce"]
}

var person1 = Object.create(person);
var person2 = Object.create(person, { name: { value: "wfwf" } });



