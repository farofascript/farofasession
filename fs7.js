/*
Função que não retorna valor.
*/
var logar = texto => console.log(texto);
logar('teste');

/*
Função que retorna valor primitivo.
*/
var calcular = (num1, num2) => num1 + num2;
calcular(1, 2);

/*
Função que retorna objeto.
*/
var obterCliente = id => ({
        id: id,
        nome: 'Cliente 1'
    });

console.log(obterCliente(1));

/*
Função parte de um objeto
*/
var cliente = {
    id: 1,
    nome: 'Cliente 1',
    descricao() {
        return 'Nome: ' + this.nome + ' (id: ' + this.id + ')';
    }
};

console.log(cliente.descricao());
