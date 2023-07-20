---
layout: ../../layouts/BlogPost.astro
title: Knowledge
publishDate: 10 Mar 2023
cover: https://img.freepik.com/free-vector/interview-concept-illustration_114360-1501.jpg?w=1480&t=st=1678433517~exp=1678434117~hmac=e1734d9a971ec24c25927190c30807de487bf3755b877a210c1fc3ce103dafbf
description: javascript多态
---
```js
  function Animal(name) {
    this.name = name
  }
  Animal.prototype.say = function () {
    console.log('我是' + this.name);
  };
  function Cat(name) {
    Animal.call(this, name);
  }
  Cat.prototype = new Animal();
  Cat.prototype.say = function () {
    console.log('喵喵喵');
  };
  function Dog(name) {
    Animal.call(this, name);
  }
  Dog.prototype = new Animal();
  Dog.prototype.say = function () {
    console.log('汪汪汪');
  };
  var cat = new Cat('小猫');
  var dog = new Dog('小狗');
  cat.say();
  dog.say();
```
