//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function LetterKind(inputLetter){
    var vowels = "AIEOUaieou";
    var specialChar ="*|,\":<>[]{}`\';()@&$#%1234567890"
    

    if (inputLetter.length == 1){
        if (vowels.includes(inputLetter)){
            console.log("Is vowel!")
        }else{
            if(specialChar.includes(inputLetter)){
                console.log("Is not a letter!")
            }else{
                console.log("Is consonant!")
            }
        }
    }
}

//for (var i = 0; i ; i++){
var inputLetter = prompt("Type a letter: ")
console.log(LetterKind(inputLetter))


//console.log(gradesTotal/gradesQuantity)