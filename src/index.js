import './css/style.sass'

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

const resultParam = hello2('Im', 32)
console.log(resultParam)

document.write(resultParam)