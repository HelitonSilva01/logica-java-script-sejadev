const pessoa = {
  nome: "Heliton",
  idade: 26,
  casado: false,
  notas: [5,8,100],
  endereco: {
    rua: "Rua wyz",
    numero: 100,
  cidade: {
    nome: "manaus",
    }
  }
}

console.log(pessoa["nome"])
// outra forma de seria 
//console.log(pessoa.nome) usar o ponto.
console.log(pessoa["idade"])
//console.log(pessoa.idade)
console.log(pessoa["casado"])
//console.log(pessoa.casado)
console.log(pessoa["notas"][2])
//console.log(pessoa.notas[2])
console.log(pessoa["endereco"]["rua"])
//console.log(pessoa.endereco.rua) outro objeto pode usar o ponto.
console.log(pessoa["manaus"]["nome"])

const array = [pessoa, pessoa]
console.log(array) 