
// Função adicionada por Gabriel: soma dois números
function soma(a: number, b: number): number {
    return a + b;
}

// Função adicionada por Gabriel: valida se a entrada é válida
function validarEntrada(valor: any): boolean {
    return valor !== null && valor !== undefined && valor !== '';
}

// Testes rápidos
console.log("Resultado da soma(3, 5):", soma(3, 5));
console.log("Entrada 'teste' válida?:", validarEntrada("teste"));
