"use strict";

require("./style.sass");

function hello(name, age) {
  console.log('Hello' + name + age);
  return name + age;
}

var resultParam = hello('Whe!', 32);
console.log(resultParam);
document.write(resultParam);