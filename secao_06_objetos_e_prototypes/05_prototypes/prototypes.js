/*
  O JavaScript é uma linguagem baseada em protótipos, ou seja, propriedades e métodos podem ser herdados através de protótipos.

  Prototype é a propriedade que um objeto tem que aponta para outro objeto.

  __proto__ é a propriedade que um objeto tem que aponta para o prototype do seu tipo.
*/

// Exemplo 01: Prototype

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

// Adicionando um método ao prototype de Pessoa >> __proto__ de pessoa1 e pessoa2. Não é recomendado.
Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
};

// Mostrando os dados
const pessoa1 = new Pessoa('Luiz', 'Miranda');
const pessoa2 = new Pessoa('Maria', 'Almeida');
console.log(pessoa1);
console.log(pessoa2);

// Exemplo 02: Prototype
