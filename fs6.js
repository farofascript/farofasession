'use strict';

/*
 Declaração de constante com atribuição de valor primitivo.
*/
const total = 1;
total = 6; // erro

/*
 Declaração de constante com atribuição de objeto. A atribuição de um novo valor
 à constante resulta em erro.
*/
const cliente = {id: 1, nome: 'FarofaScript'};
cliente = {id: 6, nome: 'JavaScript'}; // erro

/*
 As propriedades de um objeto não são protegidas e podem ser alteradas normalmente.
*/
cliente.id =  6; // O valor é alterado.
cliente.nome = 'JavaScript'; // O valor é alterado.

/*
 Para resolver, é preciso 'congelar' o objeto com o
 método Object.freeze. A FarofaSession #2 descreve como
 controlar o comportamento de um objeto em detalhes:
 https://www.youtube.com/watch?v=Dw7lgxCviDM
*/
const cliente = Object.freeze({id: 1, nome: 'FarofaScript'});
cliente.id =  6; // erro

/*
 A declaração de uma variável com a palavra-chave let define o escopo da
 variável apenas dentro do bloco onde a declaração ocorreu.
*/
function teste() {
    var i = 1;

    if (true) {
        let i = 2;
        console.log('let: ' + i);
    }

    console.log('var: ' + i);
}

teste();
// let: 2
// var: 1
