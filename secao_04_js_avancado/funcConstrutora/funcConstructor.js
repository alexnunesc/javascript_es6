// Função construtora é uma função que retorna um objeto

// Função construtora
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function() {
    console.log('Não posso ser acessado fora da função construtora');
  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo1 = function() {
    console.log(this.nome + ': sou um método');
  };

  this.metodo = function() {
    this.metodo1();
  };
}

// Instanciando o objeto
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Silva');
// new cria um novo objeto e o this faz referência a esse objeto

console.log(p1.nome);
p1.metodo();
console.log(p2.nome);
p2.metodo();
