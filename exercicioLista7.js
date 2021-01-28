//Faça um Programa que imprima Bom dia, Boa tarde ou Boa Noite dependendo da hora do dia. 
//Dica: use a classe Date.

var DayHour = new Date().getHours();

if (DayHour < 12){
    console.log("Bom Dia")
}else if (DayHour > 12 && DayHour < 18){
    console.log("Bom Tarde")
}else{
    console.log("Boa Noite")
}

