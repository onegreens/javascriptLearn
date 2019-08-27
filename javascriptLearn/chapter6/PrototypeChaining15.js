
/* 覆盖原型中的方法*/
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


//添加新方法
SubType.prototype.getSubValue = function(){
    return this.subProperty;
}
//重写超类中的方法
SubType.prototype.getSuperValue = function(){
    return false;
}
var instance = new SubType();
console.info(instance.getSuperValue());