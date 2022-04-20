function mostraHora() { // Funçao para exibir a data atual
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
// console.log(mostraHora())

const timer = setInterval(function () { // Executa a funçao MOSTRAHORA a cada 1 segundo
    console.log(mostraHora())
}, 1000)

setTimeout(function () { // Depois de 3 segundos, interrompe o que estiver sendo invocado pelo variável TIMER
    clearInterval(timer)
}, 3000)

setTimeout(function () { // Após 4 segundos, exibe a mensagem MENSAGEM QUALQUER
    console.log("Mensagem qualquer")
}, 4000)