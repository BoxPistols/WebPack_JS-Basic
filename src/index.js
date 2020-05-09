import './css/style.sass'

let el = document.querySelector('.content')

/*
  関数定義
*/

// 無名関数
// function hello(name, age){
//   console.log('Hello'  + name + age)
//   return name + age
// }

// 変数に関数を代入
const  hello2 = (name, age)  =>{
  console.log('Hello'  + name + age)
  return name + age
}

// const resultParam = hello2('Im', 32)
// console.log(resultParam)
// document.write(resultParam)

import { helloWorld } from './module'
helloWorld();

const person = {// 初期化
  name: "fooちゃお",// key / value
  age: 23,
  team: {
    a: 'kobe',
    b: 'osaka'
  },
  getFullName: function(){
    el.insertAdjacentHTML('beforeend', `<p>Kansai is : ${this.team.a + " / " + this.team.b}</p>`)
  }
}
console.log(person.name)
el.insertAdjacentHTML('beforeend', `<p>${person.name}</p>`)
person.getFullName()

const arr = [1,2,3,4,5]
for(let i in arr){
  el.insertAdjacentHTML('beforeend',`<p>id:${i + "=" + arr[i]}</p>`)
}