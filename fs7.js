var cliente = {
    nome: 'Cliente 1',
    idade: 30,
    descricao(msg) {
        return msg;
    }
};

console.log(cliente.descricao('teste'));
