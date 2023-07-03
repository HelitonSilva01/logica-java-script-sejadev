/*
const numero = "10"
if (numero == 10) {
  console.log ("É")
}else {
  console.log("não é")
}
*/

/*
const numero = 10
const resto = numero % 2
console.log(resto)
*/

/*
const numero = [10,20,-5]
let qt = 0 // começa em zero porque vai soma


for(const x of numero){
 if (x >= 0) {
   // qt = qt + 1
       //1 + 1 = 2
 }
}

numero.forEach((x) => {
  console.log (x)
})
*/

const carrinho = [10, 20]
//20 % off
const multiplicadorDeDesconto = 0.8
      // constante
/*
numero.forEach((num, pos) => {
  console.log(num)
  console.log(pos)
  numero[pos] = num * multiplicadorDeDesconto
})
*/

/*
const newNumero = numero.map((num) => {
//numero.map precisa receber alguma variavel
//constante QUE O (const newNumero) o MAP NÃO MUDA O NUMERO MAIS MUDA O RESULTADO
//ELE RETORNA UMA ARRAY MODIFICA QUE VOCE ESCOLHER NO CASO num * multiplicadorDeDesconto
  return num * multiplicadorDeDesconto
})
console.log(numero)
console.log(newNumero)
*/

/*
let soma = 0 
for (const produto of carrinho) {
  soma = soma + produto
}

console.log(soma)
*/

/*
let soma = carrinho.reduce((acumulado,valorAtual) => {
  return acumulado - valorAtual
//reduce: retorna um número
// map: retorna um array
//100 - 10 = 90 //  90 - 20 = 70
}, 100)

    console.log (soma)
*/