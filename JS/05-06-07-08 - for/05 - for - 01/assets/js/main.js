const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'section', texto: 'Frase 3' },
    { tag: 'footer', texto: 'Frase 4' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i] //DESESTRUTURANDO O OBJETO "ELEMENTOS", CAPTURANDO O VALOR DE SUAS 2 CHAVES
    let elementoCriado = document.createElement(tag) //CRIANDO O ELEMENTO HTML DE ACORDO COM A TAG RECEBIDA DO OBJETO "ELEMENTOS"

    // elementoCriado.innerHTML = texto //INSERINDO O CONTEÚDO DA VARIÁVEL "TEXTO" NOS ELEMENTOS CRIADOS ATRAVÉS DA VARIÁVEL "TAG"

    // elementoCriado.innerText = texto // MESMO EFEITO DA LINHA CIMA,COM A DIFERENÇA DE SE ESTAR UTILIZANDO O "INNERTEXT", JÁ QUE SE TRATA DA INSERÇÃO DE TEXTO PROPRIAMENTE DITO

    let textoCriado = document.createTextNode(texto) //CRIANDO NÓ DE TEXTO (TEXTNODE) COM OS VALORES DA VARIÁVEL "TEXTO" DO OBJETO
    elementoCriado.appendChild(textoCriado) //INSERINDO OS TEXTNODES DENTRO DOS ELEMENTOS CRIADOS ATRAVÉS DA VARIÁVEL "TAG"

    div.appendChild(elementoCriado)
}

container.appendChild(div)