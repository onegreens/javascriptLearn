var text = "cat,bat,sat,fat";
var pattern = /\*at/g;
//与pattern.exect(text)相同
var matches = text.match(pattern);
// console.info(matches.index);//声明全局G  相对于1没有index
// console.info(matches[0]);
console.info(matches);
console.info(pattern.lastIndex);