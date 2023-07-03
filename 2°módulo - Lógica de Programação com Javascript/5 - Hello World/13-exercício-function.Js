/*
Crie um algoritmo para calcular o fatorial de um numero n!.

OBS: O fatorial de um número é calculado pela multiplicação desse número 
por todos ps seus antecessores até chegar ao múmero 1.

Ex:
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
*/

function fatorial (n) {
  let i = n // i = 2
  let resposta = 1

  while (n >= 2) {
    resposta = resposta * n
n--
  }
  return resposta
}

/*
n = 5:
resposta = 5 * 1
n = 4
resposta = 5 * 4
n = 3
resposta = 5 * 4 * 3
n = 2
resposta = 5 * 4 * 3 * 2
n = 1
retorna resposta 
*/
    const number = 5
    const resposta = fatorial (number)
    console.log(resposta)
