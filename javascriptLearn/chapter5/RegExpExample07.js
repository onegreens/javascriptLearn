//匹配字符串中所有的“at”的实例
var p1 = /at/g;

//匹配第一个“bat”或“cat”,不区分大小写
var p2 = /[bc]at/i;

//匹配所有以“at”结尾的三个字符的组合。不区分大小写
var p3 = /.at/gi

//匹配第一个“[bc]at”，不区分大小写
var p22 = /\[bc\]at/i;

//匹配所有以“.at”结尾的三个字符的组合。不区分大小写
var p33 = /\.at/gi

//使用构造函数创建
var p222 = new RegExp("[bc]at", "gi")


