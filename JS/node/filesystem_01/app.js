const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./modulos/write')
const ler = require('./modulos/read')

// const pessoas = [
//     { nome: 'Joao' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luiza' },
// ]
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    imprimeDados(dados);
}

function imprimeDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}
leArquivo(caminhoArquivo)
// console.log(dadosArquivo)