/*
const pessoa = {
  nome: "Heliton",
  sobrenome: "Rodrigues",
  idade:26
}

const nome = pessoa.nome
console.log (nome)
*/

/*
//Destructor
const pessoa = {
  nome: "Heliton",
  sobrenome: "Rodrigues",
  idade: 26,
  senha: "123"
}

const {nome,idade} = pessoa
// constantes
// const nome = pessoa.nome
// const idade = pessoa.idade
//console.log (nome)
//console.log (idade)

const pessoaAtualizada = {
  ...pessoa,
  idade: 30,
  senha: "456"
}

console.log(pessoaAtualizada)
*/

/*
//Arrays
const array = [1,2,3,4]
const [a,b]= array

console.log (a)
console.log (b)
*/

//Arrays
const ray = [1,2,3,4]
const [a,b]= ray

const seuarray =[0,...ray, 5]
console.log(seuarray)