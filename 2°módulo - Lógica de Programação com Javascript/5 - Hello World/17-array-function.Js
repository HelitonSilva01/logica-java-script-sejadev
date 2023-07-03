/*
const array =[1,5,4,3,10,7,8,20,12]

array.forEach((elemento,posicao) => {
  console.log (elemento)
  console.log (posicao)

//forEach: passsa por todos os elementos do array
})
*/

/*
const array =[1,5,4,3,10,7,8,20,12]
array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})


//find : Retorna o elemento
const valor = array.find ((elemento) => {
   if(elemento ===10) return true
   return false
})
 console.log(valor)
 */

 /*
 const array =[1,5,4,3,10,7,8,20,12]

 array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})

const valor = array.find ((elemento) => {
  if(elemento ===10) return true
  return false
})


//findIndex: retorna a posição do elemento

const index = array.findIndex ((elemento) => {
   if(elemento === 10) return true

   return false
})
 console.log(index)
 */

/*
 const array =[1,5,4,3,10,7,8,20,12]

array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})


const valor = array.find ((elemento) => {
  if(elemento ===10) return true
  return false
})

const index = array.findIndex ((elemento) => {
   if(elemento === 10) return true

   return false
})

// some: retonra true se pleo menos um numero satisfazer a condição.

const some = array.some ((elemento) =>{
  if (elemento >= 21) return true

  return false
   
  console.log (some)
}) 
*/

/*
const array =[1,5,4,3,10,7,8,20,12]

array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})


const valor = array.find ((elemento) => {
  if(elemento ===10) return true
  return false
})

const index = array.findIndex ((elemento) => {
   if(elemento === 10) return true

   return false
})
  
const some = array.some ((elemento) =>{
  if (elemento >= 10) return true

  return false
})

//every: retorna true se TODOS OS numeros resoeitarem a condição
const every = array.every ((elemento) =>{
  if (elemento >= 1) return true

  return false
})

console.log (every)
*/

/*
const array =[1,5,4,3,10,7,8,20,12]

array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})


const valor = array.find ((elemento) => {
  if(elemento ===10) return true
  return false
})
// findIndex: retorna a posicação do elemento
const index = array.findIndex (elemento => elemento === 10)

//some: retorna true se pelo menos um numero satisfazer a condição
const some = array.some (elemento => elemento >= 10)

//every: retorna true se TODOS OS numeros resoeitarem a condição
const every = array.every (elemento => elemento >= 1)
*/


const array =[1,5,4,3,10,7,8,20,12]

array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})


const valor = array.find ((elemento) => {
  if(elemento ===10) return true
  return false
})
// findIndex: retorna a posicação do elemento
const index = array.findIndex (elemento => elemento === 10)

//some: retorna true se pelo menos um numero satisfazer a condição
const some = array.some (elemento => elemento >= 10)

//every: retorna true se TODOS OS numeros resoeitarem a condição
const every = array.every (elemento => elemento >= 1)

const newArray = [1, 2, 3, 4, 5]
//console.log(newArray.splice(1, 2))
// Splice: corte o array, o primeiro parametro é o inicio e o segundo é o quantidade
//map: alterar os valores dentro da array seguindo de uma regra.

//console.log(newArray.map((elemento) => {
 // return elemento * 2
//}))


//filter: filtrar os elementos dentro da array
console.log(newArray.filter((elemento)=>{
return elemento % 2 === 0 //resto 0 //resto 1
}))

//reduce: reduz o array pra algum outro elemento
console.log(newArray.reduce((acumulado,elemento)=>{
  return acumulado + elemento
}, 0))