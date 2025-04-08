const gerarSenha = require('./gerarSenha');
const validarSenha = require('./validarSenha');

// Função adicionada: soma dois números
function soma(a, b) {
    return a + b;
}
// Função adicionada: valida se a entrada é válida
function validarEntrada(valor) {
    return valor !== null && valor !== undefined && valor !== '';
}
// Testes rápidos
console.log("Resultado da soma(3, 5):", soma(3, 5));
console.log("Entrada 'teste' válida?:", validarEntrada("teste"));


const senha = gerarSenha(12);
console.log(`Senha gerada: ${senha}`);

const resultadoValidacao = validarSenha(senha);
console.log(resultadoValidacao.mensagem);