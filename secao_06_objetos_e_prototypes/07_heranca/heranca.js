// Produto > aumento, desconto
// Caneca > Material, estoque
// Camiseta > Cor
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

// Literal (não recomendado).
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Criando um método  aumentarPreco() para Camiseta.
Camiseta.prototype.aumentarPreco = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// Literal (não recomendado).
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// Mostrnado os objetos.
const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
caneca.estoque = 100;
console.log(caneca.estoque);
camiseta.aumentarPreco(10);
console.log(camiseta);
