// FOR IN -> LÊ OS ÍNDICES OU CHAVES DE UM OBJETO

// const frutas = ['Pêra', 'Maçã', 'Uva']

// for (let index in frutas){
//     console.log(frutas[index])
// }


const pessoa = {
    nome: 'Renan',
    sobrenome: 'Lopes',
    idade: 35
}

for (let chave in pessoa ) {
    console.log(chave, pessoa[chave])
}