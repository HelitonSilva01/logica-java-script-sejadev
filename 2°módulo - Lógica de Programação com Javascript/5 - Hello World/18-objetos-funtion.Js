/*//object.keys
const person = {
  nome: "Heliton",
  lastname: "Rodrigues"
}
console.log(Object.keys(person))
*/

/*
//object.values
const person = {
  nome: "Heliton",
  lastname: "Rodrigues"
}
console.log(Object.values(person))
*/

/*
//obejct.entries(): criar um array com um array de objetos e valores
const person = {
  nome: "Heliton",
  lastname: "Rodrigues"
}
console.log(Object.entries(person))
//ex: [['name','Heliton'], ['lastName','Rodrigues']]
          //1º posição         //2º posição
*/

/*
const person = {
  nome: "Heliton",
  lastname: "Rodrigues"
}
   
const livros = {
  'livros A': 19.90,
  'livros B': 97.00,
  'livros C': 20.00
}
const values = (Object.values(livros))

console.log(values)
*/

const person = {
  nome: "Heliton",
  lastname: "Rodrigues"
}
   
const livros = {
  'livros A': 19.90,
  'livros B': 97.00,
  'livros C': 20.00
}
const values = Object.values(livros)
// values = [19.90, 97.00, 20.00]
const sum = values.reduce((val,acc) => val + acc, 0)
 // é uma função
console.log(sum)