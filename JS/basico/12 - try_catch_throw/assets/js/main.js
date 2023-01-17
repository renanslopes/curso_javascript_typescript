function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError(`Esperando instância de Date`) // Se a data foi enviada  não é uma instância do objeto DATE, lançar a msg de erro: ESPERANDO INSTANCIA DE DATE
    }
    if (!data) {
        data = new Date() // Se a data não for enviada, pegar a data atual
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hora = retornaHora()
    console.log(hora)
} catch (e) {
    // Tratamento do errro como achar melhor
} finally {
    console.log("Tenha um bom dia!")
}
