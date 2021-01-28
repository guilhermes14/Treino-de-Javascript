//Faça um programa que peça as 4 notas bimestrais e mostre a média.

var gradesTotal = 0
var gradesQuantity = 4
for (var i = 0; i < gradesQuantity; i++){
    var grades = prompt("Add a number")
    gradesTotal += parseInt(grades)
}

console.log(gradesTotal/gradesQuantity)

