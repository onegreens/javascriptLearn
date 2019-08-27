var text = "cat,bat,sat,fat";

var result = text.replace(/(.at)/g,"word ($1)");
console.info(result);