const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// CONVENCIONAL
// const primeiroNumero = numeros[0]
// console.log(primeiroNumero)

// DESESTRUTURAÇÃO
// const [primeiroNumero, segundoNumero] = numeros
// console.log(primeiroNumero, segundoNumero)

// DESESTRUTURAÇÃO + OPERADOR REST
// const [primeiroNumero, segundoNumero, ...resto] = numeros
// console.log(primeiroNumero, segundoNumero)
// console.log(resto)

// DESESTRUTURAÇÃO COM OBJETOS
const pessoa = {
    nome: `Renan`,
    sobrenome: `Lopes`,
    idade: 30,
    endereco: {
        rua: `Av Brasil`,
        numero: 1000
    }
}

// const { nome, sobrenome, idade } = pessoa // CRIANDO VARIÁVEL COM NOME IGUAL AO DA CHAVE DO OBJETO
const { nome: n = '', sobrenome, idade } = pessoa // CRIANDO UMA VARIÁVEL COM NOME DIFERENTE DO OBJETO E ATRIBUINDO VALOR PADRÃO
const { endereco: { rua, numero } } = pessoa // CRIANDO VARIÁVEIS DE OBJETOS DENTRO DE OUTROD OBJETOS
console.log(rua, numero)