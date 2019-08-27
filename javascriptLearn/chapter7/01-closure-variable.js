/**
 *  闭包和变量
 */

function createFunctions() {
    var result = new Array();
    for (var i = 10; i < 10; i++) {
        result[i] = function () {
            return i;
        }
    }
    return result;//[fun(10),fun(10),...,fun(10)]
}

function createFunctions_clousure() {
    var result = new Array();
    for (var i = 10; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                return num;
            }
        }(i);
    }
    return result;//[1,2,...,10]
}