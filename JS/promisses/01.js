// Função para criar número aleatório que será convertido para segundos, entre 1 e 3
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        //REJECT
        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            // console.log(msg);
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3)); // Linha alterada para causar o 'reject' e o 'catch'
    })
    .then(resposta => {
        return resposta + ' vai pro outro THEN';
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)
    })
    // Caso ocorra algum 'reject', o 'catch' é executado
    .catch(e => {
        console.log('Erro: ', e)
    });
// Invocando a função "esperaAi" em sequência e tendo um resultado aleatória na exibição da ordem das frases.
// esperaAi('Frase 1', rand(1, 3));
// esperaAi('Frase 2', rand(1, 3));
// esperaAi('Frase 3', rand(1, 3));