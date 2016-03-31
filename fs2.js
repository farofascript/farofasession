var Produto = function(nome, categoria) {
    this.nome = nome;
    this.categoria = categoria;
};

Produto.prototype.descricao = function() {
    console.log('Produto: ' + this.nome + ' - Categoria: ' + this.categoria);
};

var computador = new Produto('Laptop', 'Computadores');
computador.descricao();

var guitarra = new Produto('Guitarra', 'Instrumentos Musicais');
guitarra.descricao();

console.log(computador.descricao === guitarra.descricao);

// Previne que novas propriedades sejam adicionadas ao objeto.
Object.preventExtensions(computador);
computador.preco = 1000;
console.log(computador);
console.log(Object.isExtensible(computador));


/*
Previne que novas propriedades sejam adicionadas ao objeto e também marca todas
as propriedades como não configuráveis.
*/
Object.seal(computador);
computador.preco = 1000;
console.log(computador);
console.log(Object.isSealed(computador));


/*
Previne que propriedades sejam adicionadas ou removidas
ou que as propriedades existentes tenham suas configurações alteradas.
Os valores da propriedade não podem ser alterados.
O objeto torna-se imutável apenas no primeiro nível. Se o objeto tiver uma
propriedade do tipo objeto, ela não é congelada automaticamente.
*/
Object.freeze(computador);
computador.preco = 1000;
computador.categoria = 'Instrumentos Musicais';
delete computador.categoria;
console.log(computador);
console.log(Object.isFrozen(computador));
