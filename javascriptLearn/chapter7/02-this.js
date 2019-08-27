/**
 * this的应用
 */
function condition1() {
    var name = "this window";

    var obj = {
        name: "this obj",
        getName: function () {
            return function () {
                return this.name;
            }
        }
    }
    console.info(obj.getName());
}
condition1();//"this window"

function condition2() {
    var name = "this window";

    var obj = {
        name: "this obj",
        getName: function () {
            var that = this;
            return function () {
                return that.name;
            }
        }
    }
    console.info(obj.getName());
}
condition2();//"this obj"

function condition3() {
    var name = "this window";

    var obj = {
        name: "this obj",
        getName: function () {
            return this.name;
        }
    }
    console.info(obj.getName());
}
condition3();//"this obj"