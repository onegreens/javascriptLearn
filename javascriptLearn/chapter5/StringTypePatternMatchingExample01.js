var text = "cat,bat,sat,fat";
var pattern = /.at/;
//与pattern.exect(text)相同
var matches = text.match(pattern);
console.info(matches.index);
console.info(matches[0]);
console.info(matches);
console.info(pattern.lastIndex);