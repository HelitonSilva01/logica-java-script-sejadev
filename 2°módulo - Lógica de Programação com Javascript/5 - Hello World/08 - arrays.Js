/*
const variavel = 10
let array = [true,false, 0, 1, 2, "string aqui", "sejadev", variavel]
// posição    0     1    2  3  4     5               6          7

console.log(array[1])
*/

/*
const variavel = 10
let array = [true,false, 0, 1, 2, "string aqui", "sejadev", variavel]
// posição    0     1    2  3  4     5               6          7

console.log(array)
array.push(1000,"string")
console.log(array)
*/


/*
let array = [true,false, 0, 1, 2, "string aqui", "sejadev"]
// posição    0     1    2  3  4     5               6          7

console.log(array)
array.pop() // remove o ultimo elemento do array
console.log(array) // adiciona elementos no array
array.push(1000,"string")
*/

/*
let newArray = [10, 20, 30] 
// posição       0   1   2 = 3
console.log(newArray.length)
*/

/*
let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length){
  console.log (i)
  console.log (newArray[i])
  i++
}
// enquanto o i for menor que o tamanho do array
// começa com I = 0, depois dá um console.log 0, depois dá um newArray na posição 0 ou seja o 10 e depois i++ pra sommar o valor do i.
*/

/*
let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length){
  i++
}
for(let pos = 0; pos < newArray.length; pos++) {
  console.log(newArray[pos])
}
//primeira posição é inicio da variavel pos = 0; enquanto a posição pos for < que o tamanho da array soma mais 1 na varaivel pos++
*/

/*
let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length){
  i++
}
// for...of
for (let pos in newArray){
    console.log(pos)
    console.log(newArray[pos])
}
// já segui com 0 automatico e newarray com alguma posição disponivel.
*/

/*
let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length){
  i++
}
//for...of
for (let array of newArray) {
  console.log(array)
}
//array variavel
*/


/*
exercicio: dado um array com x numero,
encontrar a media dessses numeros.
media = (soma dos alementos) / tamanho
*/

const numbers = [10,20,30] //array
//posição   =   0  1  2 = 3 
let sum = 0
for (let num of numbers){
  sum = sum + num
//sum =  0  + 10+20+30 = 60
}
const media = sum / numbers.length
//    media = 60  /  30     (tamanho)
console.log(media)