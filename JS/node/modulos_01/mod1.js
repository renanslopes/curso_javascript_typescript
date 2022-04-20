const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// console.log(exports)