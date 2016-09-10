'use strict';
function Pessoa() {
    var _nome;
    Object.defineProperty(this, 'nome', {
        enumerable: true,
        get: function () {
            return _nome;
        },
        set: function (valor) {
             _nome = valor;
        }
    });
}

var pessoa = new Pessoa();
pessoa.nome = 'Paulo';
console.log(pessoa.nome);
console.log(pessoa);
