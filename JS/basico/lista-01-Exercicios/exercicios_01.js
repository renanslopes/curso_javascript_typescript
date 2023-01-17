// #### Escreva uma função que recebe 2 números e retorne o maior deles ##

// function maiorNumero(numero1, numero2){ //Feito por mim
//     numero1 > numero2 ? console.log(numero1) : console.log(numero2)
// }

// Feito pelo professor
const maiorNumeroProf = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2
console.log(maiorNumeroProf(10,60))

// maiorNumero(1,6) Feito por mim

// ___________________________________________________________________________________________________________________________________________

// #### Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem. Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura ? true : false // SEGUNDA TENTATIVA
console.log(ePaisagem(2100, 400))

// function ePaisagem(largura, altura){ MINHA PRIMEIRA TENTATIVA
//     console.log(largura > altura ? true : false)
// }
// ePaisagem(200, 600)

//REFATORADO PELO PROF
 const ePaisagem = (largura, altura) => largura > altura
 console.log(ePaisagem(1070, 300))


// ___________________________________________________________________________________________________________________________________________


// #### Escreva uma função que recebe um numero e retorne:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5, retorne o próprio número
// Checar se o número é de fato um número = Retorne o próprio número
// Use a função com números de 0 a 100

const random = (min, max) => { // Função para se determinar um valor inteiro dentro de um limite min e max
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let numero = random(1, 100)

function FizzBuzz (numero){
    if(numero == isNaN){
        return numero
    }else if(numero % 3 == 0 && numero % 5 == 0){
        return "FizzBuzz"
    }else if (numero % 3 == 0){
        return "Fizz"
    }else if (numero % 5 == 0) {
        return "Buzz"
    }
    else{
        return numero
    }
}

console.log(`Número randômico: ${numero} | Resultado da função: ${FizzBuzz(numero)}`)