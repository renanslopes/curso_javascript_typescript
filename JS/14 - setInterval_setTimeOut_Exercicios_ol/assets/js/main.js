const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function (event) {
    // relogio.innerHTML = 'Chama!'
    iniciaTimer(relogio)
})
pausar.addEventListener('click', function (event) {

})
zerar.addEventListener('click', function (event) {
    relogio.innerHTML = '00:00:00'
})



function iniciaTimer (relogio){
    let relogioString = JSON.stringify(relogio)
    relogioString = "00:00:00"
    console.log(relogioString)
    let relogioStringDividido = relogioString.split(":")
    console.log(relogioStringDividido)
    parseInt(relogioStringDividido)
    // console.log(typeof(relogioStringDividido))
    console.log(relogioStringDividido[2] )
}

