const form = document.querySelector('._form')
const result = document.querySelector('._result_p')
const weigth = form.querySelector('#form_weigth')
const heigth = form.querySelector('#form_heigth')
let imc = 0
let message
form.addEventListener('submit', receiveSubmitForm)

function calculateImc(weigth, heigth) {
    if (weigth.value == 0 || heigth.value == 0 || weigth.value > 350 || heigth.value > 220 || heigth.value < 20) {
        return message = "Valor preencher corretamente os campos."
    }

    imc = (weigth.value / (heigth.value * heigth.value)) * 10000

    if (imc < 18.5) {
        return message = `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: Abaixo do peso.`
    } else if (imc >= 18.5 && imc < 25) {
        return message = `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: Peso normal.`
    } else if (imc >= 25 && imc < 30) {
        return message = `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: Sobrepeso.`
    } else if (imc >= 30 && imc < 35) {
        return message = `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: Obesidade grau 1.`
    } else if (imc >= 35 && imc < 40) {
        return message = `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: Obesidade grau 2.`
    } else {
        return message = `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: Obesidade grau 3.`
    }
}


function receiveSubmitForm(event) {
    event.preventDefault()
    calculateImc(weigth, heigth)
    // result.innerHTML += `O seu IMC é: ${imc.toFixed(2)} , e sua classificação de acordo com a OMS é: ${message}`
    result.innerHTML = message
}







