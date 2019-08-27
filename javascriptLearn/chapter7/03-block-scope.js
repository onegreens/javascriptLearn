function outputNumbers(count) {
    for (var i = 0; i < count; i++) {
        console.info(i);
    }
    console.info(i)
}
outputNumbers(2);//0,1,2

function outputNumbers1(count) {
    for (var i = 0; i < count; i++) {
        console.info(i);
    }
    var i;
    console.info(i);
}
outputNumbers1(2);//0,1,2


//块级作用域

(function(){
    //这里是块级作用域
})()