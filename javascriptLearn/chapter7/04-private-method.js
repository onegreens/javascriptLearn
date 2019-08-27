function MyObject() {
    //声明私有变量和私有函数
    var privateVariable = 10;
    function privateFunction() {
        return false;

    }

    this.publicFunction = function () {
        privateVariable++;
        return privateFunction()
    };

}

/**
 * 无法直接访问Person中的name
 * @param {*} name 
 */
function Person(name) {
    this.getName = function () {
        return name;
    }
    this.setName = function (val) {
        name = val;
    }
}

var person = new Person("Nocholas");
console.info(person.getName());
person.setName("Grag");
console.info(person.getName());
