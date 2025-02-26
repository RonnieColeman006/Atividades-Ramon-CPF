let CPF = "123.456.789-30"
let cpfTeste = CPF.slice(0, 11)

function substituicao(input){
    return input
    .replace(/["."]/g, "")
    .replace("/", "")
}

function verifyCPF(){
    var onlyNum = substituicao(CPF)
    for (var i = 2; i < 10; i++){
        var firstDigit = onlyNum[i - 1] * i
        firstDigit = firstDigit + firstDigit;
    }
    firstDigit = firstDigit % 11
    if (firstDigit < 2){
        firstDigit = 0
    }else{
        firstDigit = 11 - firstDigit
    }
    var secondDigit = firstDigit * 11
    secondDigit = secondDigit % 11
    if (secondDigit < 2){
        secondDigit = 0
    }else{
        secondDigit = 11 - secondDigit
    }
    let cpfFinal = cpfTeste + "-" + firstDigit + secondDigit
    if (cpfFinal === CPF){
        console.log("CPF valido")
    }
}

verifyCPF()
