//使用一个返回对象的匿名函数
//这个模式在需要对单例进行某些初始化,同事有需要维护其私有变量时非常有用
var singleton = function () {
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }
    return {
        publicProperty: true,
        publicMethod: function () {
            privateVariable++;
            return privateFunction();
        }
    }
}();


//example
var application = function () {
    var components = new Array();
    components.push(new BaseComponent());
    return {
        getComponentCount: function () {
            return components.length;
        },
        registerComponent: function (component) {
            if (typeof component == "object") {
                components.push(component);
            }
        }
    }

}();