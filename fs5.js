function Impostoladora(nome, imposto) {
    this.nome = nome;
    this.imposto = imposto;
}

Impostoladora.prototype.calcular = function(preco, quantidade) {
    var subTotal = preco * quantidade;
    var total = subTotal * (this.imposto / 100);
    console.log(this.nome + ': ' + total);
    return total;
}

var calculadora = new Impostoladora('Imposto simples', 5.00);
calculadora.calcular(100, 2);

var impostos = {
    federal: {
        nome: 'Imposto Federal',
        imposto: 10.00
    },
    estadual: {
        nome : 'Imposto Estadual',
        imposto: 8.00
    },
    municipal: {
        nome : 'Imposto Municipal',
        imposto: 6.00
    }
};

console.log('apply');
calculadora.calcular.apply(impostos.federal, [100, 2]);
calculadora.calcular.apply(impostos.estadual, [100, 2]);
calculadora.calcular.apply(impostos.municipal, [100, 2]);

console.log('call');
calculadora.calcular.call(impostos.federal, 100, 2);
calculadora.calcular.call(impostos.estadual, 100, 2);
calculadora.calcular.call(impostos.municipal, 100, 2);

console.log('bind');
var calculadoraImpostoFederal = calculadora.calcular.bind(impostos.federal);
calculadoraImpostoFederal(100, 2);

var calculadoraImpostoEstadual = calculadora.calcular.bind(impostos.estadual);
calculadoraImpostoEstadual(100, 2);

var calculadoraImpostoMunicipal = calculadora.calcular.bind(impostos.municipal);
calculadoraImpostoMunicipal(100, 2);



function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

function Computador(nome, preco, cpu, ram) {
    Produto.call(this, nome, preco);
    this.cpu = cpu;
    this.ram = ram;
}

var computador = new Computador('ABC', 1000.00, 'I7', 16);
console.log(computador);
