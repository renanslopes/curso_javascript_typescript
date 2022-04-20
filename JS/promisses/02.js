// Função para criar número aleatório que será convertido para segundos, entre 1 e 3
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        //REJECT
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            // console.log(msg);
            resolve(msg);
        }, tempo);
    });
}

//Promise.all - Resolve cadeira de Promises
//Promise.race - Resolve e retorna a primeira promise executada
const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000, 1000),
    // 'Outro valor'
];

Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro)
    })