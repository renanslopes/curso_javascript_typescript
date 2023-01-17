function funcao() {
    // Mesmo sem ter os parametros declarados explicitamente, 
    // não haverá erro de execução, pois no JS existe um recurso que sustena todos 
    // os argumentos recebidos (ou não) por uma função: arguments. Isso em funções declaradas
    // através do identificador "function"
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7)

// Utilizando desestruturação nos parametros
function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
funcao({ nome: 'Luiz', sobrenome: 'Otáveio' })


// Rest Operator
function conta(operador, acumulador, ...numeros) { // O primeiro parametro será o OPERADOR, o segundo o ACUMULADOR e todo o restante será incluído como NUMEROS
    for (let numero of numeros) {
        // console.log(numero)
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);

}
conta('/', 1, 20, 30, 40, 50)