
/*不能使用对象字面量创建原型方法,因为这样会重写原型链*/
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subProperty = false;
}
SubType.prototype = new SuperType();

SubType.prototype = {
    getSubValue : function(){
        return this.subProperty;
    }
}
var instance = new SubType();
console.info(instance.getSuperValue());//error 不存在这个方法