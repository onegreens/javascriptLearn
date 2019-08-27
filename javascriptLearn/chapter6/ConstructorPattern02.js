function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.info(this.name);
    }
}
/**
 * 流程
 * 1.创建一个新对象
 * 2.将构造函数的作用域赋给新对象（this就是指这个新对象）
 * 3.执行构造函数中的代码
 * 4.返回新对象
 */