var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(","); console.info(colors1);
var colors2 = colorText.split(",", 2); console.info(colors2);//只包含两个项
var colors3 = colorText.split("/[^\,]+/"); console.info(colors3);//通过使用正则表达式，还可以取得包含逗号字符的数组