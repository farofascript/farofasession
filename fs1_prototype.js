'use strict';
function Pessoa() {
    Object.defineProperty(this, 'nome', {
        __proto__: null,
        enumerable: true,
        get: function () {
            return __proto__.nome;
        },
        set: function (valor) {
             __proto__.nome = valor;
        }
    });
}

var pessoa = new Pessoa();
pessoa.nome = 'Paulo';
console.log(pessoa.nome);
console.log(pessoa);
