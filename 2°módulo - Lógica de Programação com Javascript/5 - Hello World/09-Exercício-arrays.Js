/* 
A prefeitura possui uma lista de idade de cada morador e quer saber
a quntantidade de moradores que são eleitores
obrigatorios,facultativos ou não eleitores de acordo com as 
informações abaixo:

Obrigatorio: entre 18 e 69 anos.
facultativo: entre 16 e 17 anos ou acima de 70 anos.
não eleitor: Abaixo de 16.
*/

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for (let idade of lista) {
  if (idade >= 18 && idade <= 69) obrigatorio++
  else if (idade < 16) naoEleitor++
  else facultativo++
}

console.log("Obrigatorio:", obrigatorio)
console.log("Facultativo:", facultativo)
console.log("Não eleitor:", naoEleitor)

/* naoEleitor: 10 e 15.
  facultativo: 70,80,79 e 99.
  obrigatorio: o que sobrou.
  */