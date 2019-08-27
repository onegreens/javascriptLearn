/** 
 * 原型式继承
 * 
 * 要求必须有一个对象作为另外一个对象的基础
 */
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
var person = {
    name: "lisi",
    friends: ["tom", "hoce"]
}

var person1 = object(person);



