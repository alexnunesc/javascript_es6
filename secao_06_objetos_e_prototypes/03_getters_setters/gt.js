// Getters e Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configurável

    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem');
      } // condição fictícia
      estoquePrivado = valor;
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque); // getter
p1.estoque = 50; // setter
console.log(p1.estoque); // getter

