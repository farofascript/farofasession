/*
Exemplo de string literal em uma linha.
*/
console.log(`Exemplo de string literal`);

/*
Exemplo de string literal em múltiplas linhas.
*/
var texto1 = 'Primeira linha do texto.\nSegunda linha do texto';
console.log(texto1);

var texto2 = `Primeira linha do texto.
Segunda linha do texto`;
console.log(texto2);

console.log(texto1 === texto2);

/*
Exemplo de interpolação de  variáveis e expressões.
*/
var moeda = 'R$',
    valor = 100,
    quantidade = 5;

function calcular(valor, quantidade) {
    return valor * quantidade;
}

console.log(`Total: ${moeda} ${calcular(valor, quantidade)}`);
