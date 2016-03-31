/*
    1. O padrão de projeto módulo resolve o problema de encapsulamento.
    2. A variação desse padrão de projeto que elimina a necessidade da palavra-chave this
       e de uma variável local é baseada nesse artigo do Christian Heilmann:
       https://www.christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/
*/

var administracaoUsuarios = (function() {
    var usuarios = [];

    function adicionar(nome) {
        usuarios.push(nome);
    }

    function remover(nome) {
        usuarios.splice(usuarios.indexOf(nome), 1);
    }

    return {
        adicionar : adicionar,
        remover : remover
    };
})();

administracaoUsuarios.adicionar('Usuario 1');
administracaoUsuarios.adicionar('Usuario 2');
administracaoUsuarios.adicionar('Usuario 3');
administracaoUsuarios.adicionar('Usuario 4');
administracaoUsuarios.remover('Usuario 4');
