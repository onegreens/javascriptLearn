
/* 
借用构造函数
传递参数
*/
function SuperType(name) {
    this.name = name
}

function SubType() {
    SuperType.call(this,"zhangsan");
}


var instance = new SubType();
console.info(instance.name);