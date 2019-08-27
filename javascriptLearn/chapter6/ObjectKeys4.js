function Person() { }
Person.prototype.name = "abc";
Person.prototype.age = 1;
Person.prototype.sayName = function(){
    console.info(this.age)
};
var keys = Object.keys(Person.prototype);
console.info(keys);

var p1 = new Person();
p1.name = "cdf";
p1.age = 2;
var keys_ = Object.keys(p1);
console.info(keys_);
