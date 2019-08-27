//增强模块模式
var singleton = function () {
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }
    var object = new CustomType();
    object.publicProperty = true;
    object.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
    return object
}

//example
var application = function () {
    var components = new Array();
    components.push(new BaseComponent());
    var app = new BaseComponent();
    app.getComponentCount = function () {
        return components.length;
    }
    app.registerComponect = function (component) {
        if (typeof component == "object") {
            components.push(component);
        }
    }
    return app;
}