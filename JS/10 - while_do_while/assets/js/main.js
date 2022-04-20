function random(min, max){ // Função para se determinar um valor inteiro dentro de um limite min e max
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random (min, max)

while (rand !== 10){ // WHILE que é interrompido quando o número 10 surge no laço
    rand = random(min, max)
    console.log(rand)
}