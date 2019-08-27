function selectForm(lowerValue, upperValue) {
    var choices = upperValue - lowerValue;
    return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectForm(2, 10);//介于2到10之间的一个数字（包括2和10）
console.info(num)


var text = ["text1", "text2", "text3", "text4", "text5", "text6", "text7"];
var result = text[selectForm(0, text.length - 1)];
console.info(result)
