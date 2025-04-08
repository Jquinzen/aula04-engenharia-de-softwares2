const gerarSenha = require('./gerarSenha');
const validarSenha = require('./validarSenha');


function soma(a, b) {
    return a + b;
}

function validarEntrada(valor) {
    return valor !== null && valor !== undefined && valor !== '';
}

console.log("Resultado da soma(3, 5):", soma(3, 5));
console.log("Entrada 'teste' válida?:", validarEntrada("teste"));


const senha = gerarSenha(12);
console.log(`Senha gerada: ${senha}`);

const resultadoValidacao = validarSenha(senha);
console.log(resultadoValidacao.mensagem);