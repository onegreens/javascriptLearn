/*通过函数定义转义到构造函数外部*/
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName(){
    console.info(this.name);
}
