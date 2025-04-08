

function soma(a: number, b: number): number {
    return a + b;
}


function validarEntrada(valor: any): boolean {
    return valor !== null && valor !== undefined && valor !== '';
}


console.log("Resultado da soma(3, 5):", soma(3, 5));
console.log("Entrada 'teste' válida?:", validarEntrada("teste"));
