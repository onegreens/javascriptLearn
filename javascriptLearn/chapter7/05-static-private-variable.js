//基本模式
(function () {
    var privateVariable = 10;

    function privateFunction() {
        return false;

    }
    //初始化为声明的变量,总是会创建一个全局变量
    MyObject = function () {

    }
    MyObject.prototype.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
});


(function () {
    var name = "";
    Person = function (val) {
        name = val;
    }
    Person.prototype.setName = function (val) {
        name = val;
    }

    Person.prototype.getName = function () {
        return name;
    }
})