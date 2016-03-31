// sistema.js
var sistema = {
    fabrica : {
        adicionarNamespace : function(sistema, namespace) {
            var niveis = namespace.split('.');
            var parente = sistema;

            if (niveis[0] === 'sistema') {
                niveis = niveis.slice(1);
            }

            for (var i = 0; i < niveis.length; i++) {
                if (typeof parente[niveis[i]] === 'undefined') {
                    parente[niveis[i]] = {};
                }

                parente = parente[niveis[i]];
            }

            return parente;
        }
    }
};

// autenticacao.js
sistema.fabrica.adicionarNamespace(sistema, 'sistema.autenticacao');

// relatorios.js
sistema.fabrica.adicionarNamespace(sistema, 'sistema.relatorios');

// administracao-usuarios.js
sistema.fabrica.adicionarNamespace(sistema, 'sistema.administracao.usuarios');
sistema.administracao.usuarios = (function() {
    function adicionar(usuario) {}
    function remover(usuario) {}

    return {
        adicionar : adicionar,
        remover : remover
    };
})();

// administracao-relatorios.js
sistema.fabrica.adicionarNamespace(sistema, 'sistema.administracao.relatorios');

console.log(sistema);
