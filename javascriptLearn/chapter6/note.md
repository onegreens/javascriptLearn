# 6.面向对象的程序设计

## 6.1属性类型

### 数据属性

- Configurable
- Enumerable
- Writeable
- Value

要修改数据属性，必须通过Oject.defineProperty()

### 访问器属性

- Configurable
- Enumerable
- Get
- Set

要定义访问器属性，必须通过Oject.defineProperty()

## 6.2 定义对象属性的方法

- 创建对象

```js
    var person = new Object();
    person.name = "abc";
```

- 字面量

```js
    var person = { name : "abc" }
```

- defineProperty

```js
    var person = {};
    Object.defineProperty(person,name,{value:"abc"})
```
- 原型

```js
    function Person(){}
    Person.prototype.name = "abc";
```

## 6.3 常用方法

- Object.defineProperty(obj,property,value_obj) 定义属性
- Object.getOwnPropertyDescriptor(obj,property) 读取属性的特性
- Object.prototype.isPrototypeOf(obj) 原型对象的指针是否相同
- Object.getPrototype(obj) 返回对象的原型
- obj.hasOwnProperty("property-name") 检测一个属性是否存在于实例中，原型中或不存在会返回false
- "property-name" in obj 是否能通过对象能够访问给定属性
- Object.keys(obj) 获取对象上所有可枚举的实例属性
- Object.getOwnPropertyNames(obj) 获取所有的实例属性
- obj instanceof Object 判断原型和实例之间的关系
- Object.prototype.isPrototypeOf(obj) 判断原型和实例之间的关系

### 识别对象类型

- obj.construct == Object
- obj.instanceOf Object

## 6.4 创建对象的模型

- 工厂模式 FactoryPattern
  - 解决创建多个对象相似的问题
  - 没有解决对象识别的问题
- 构造函数模式 ConstructorPattern
  - 每个方法都要在每个实例上重新创建一遍

## 6.5 原型模式

- 原型prototype属性是一个指针，指向一个对象
- 用途是包含可以由特定类型的所有实例共享的属性和方法
- 所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性是一个指向prototype属性所在函数的指针
- 当为对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性
- delete能够删除实例属性，无法删除原型属性
