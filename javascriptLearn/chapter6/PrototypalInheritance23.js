/** 
 * 寄生式继承
 * 
 * 创建一个仅用于封装继承的函数,该函数在内部以某种方法来增强对象
 */

function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function () {
        console.info("hi")
    }
    return clone;
}



