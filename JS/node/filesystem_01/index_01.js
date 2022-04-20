const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if (/node_modules/g.test(fileFullPath)) continue; // Removendo a pasta "node_modules" do resultado 

        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue;
        }
        console.log(fileFullPath)
    }
}

readdir('C:/Users/renan.lopes/Desktop/Javascript/Udemy/Javascript_Typescript/exercicios/node/')

// fs.readdir(path.resolve(__dirname)) // Lendo o diretório onde arquivo 'index.js está'
//     .then(files => console.log(files)) // Irá 'logar' a resposta assim que terminar de ler o diretório
//     .catch(e => console.log(e))