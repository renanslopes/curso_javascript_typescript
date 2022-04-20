function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000) //Parametro da função DATE é contabilizado em milisegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //Para iniciar como relógio zerado (00:00:00)
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000)
}

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    } else if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    } else if (el.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
})


// PRIMEIRO MÉTODO ENSINADO
// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio()
// })
// pausar.addEventListener('click', function (event) {
//     clearInterval(timer)
//     relogio.classList.add('pausado')
// })
// zerar.addEventListener('click', function (event) {
//     clearInterval(timer)
//     relogio.innerHTML = '00:00:00'
//     segundos = 0
// })

