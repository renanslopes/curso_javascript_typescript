const paragrafos = document.querySelector('.paragrafos')
const p = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) // Capturando todos os estilos do BODY
const backgroundColorBody = estilosBody.backgroundColor // Capturando apenas o background da variável criada na linha acima
// console.log(backgroundColorBody)

for (let ps of p){ // Iterando sobre os node lists capturados na varável PS
    ps.style.backgroundColor = backgroundColorBody // Replicando o background capturado anteriormente a variável P
    ps.style.color = "#fff" // Alterando a cor da variável P para branco
}