const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros){
 
    if(numero === 2){ // Pulando o numero 2 na iteração
        console.log('Pulei o numero 2')
        continue
    }

    console.log(numero)

    if (numero === 7){ // Fazendo o laço ser interrompido ao se encontrar o número 7
        console.log("7 encontrado, saindo do laço...")
        break
    }
}