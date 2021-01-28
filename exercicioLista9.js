/*

Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                     Até 5 Kg           Acima de 5 Kg
Morango         R$ 7,50 por Kg          R$ 6,20 por Kg
Maçã            R$ 5,80 por Kg          R$ 4,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, 
receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) 
de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

*/

var apples = prompt("How many kg of apples did you buy?")
var strawberries = prompt("How many kg of strawberries did you buy?")

var kilos = {apple: apples, strawberry: strawberries}

const applePrice = [7.5, 6.2]
const strawberryPrice = [5.8, 4.5]

var value = 0

//value = 