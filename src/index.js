import './style.sass'

window.addEventListener('load', () =>{
  alert('ばべ')
})

function hello(name, age){
  console.log('Hello'  + name + age)
  return name + age
}

const resultParam = hello('Whe!', 32)
console.log(resultParam)

document.write(resultParam)