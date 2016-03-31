var pessoa = {};
// var _nome;
// Object.defineProperty(pessoa, 'nome', {
//     enumerable: true,
//     configurable: true,
//     get : function() {
//         return _nome;
//     },
//     set: function(nome) {
//         _nome = nome;
//     }
// });

Object.defineProperties(pessoa, {
    'nome': {
        value: 'Luca',
        writable: true,
        enumerable: true
    },
    'idade': {
        value: 2,
        writable: false,
        enumerable: true
    }
});

pessoa.idade = 10;
console.log(pessoa);
delete pessoa.nome;
console.log(pessoa);
