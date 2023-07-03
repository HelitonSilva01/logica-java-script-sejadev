/*Jôao, um pescador, gostaria de controlar o
rendimento diário de seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estalecido 
pelo regulamento de pesca do estado de São Paulo (50 quilos)
deve pagar uma multa de R$ 4,00 por quilo excedente.
João precisa que você faça um script que leia o peso de peixes 
 que grava na variável "excesso" e na variável "multa" o valor da multa que João deverá pagar
 */

 const limite = 50 //limite em kg definido
 const valorDaMulta = 4 //valor da multa em R$ definido
 const pesoDePeixes = 51 //peso de peixes do Jõao

 let excesso // execesso de peso
 let multa //valor da multa

 if (pesoDePeixes > limite) {
  excesso = pesoDePeixes - limite
 } else {
  excesso = 0
 }

 multa = excesso * valorDaMulta
 console.log("Excesso:", excesso)
 console.log("Multa: R$", multa)