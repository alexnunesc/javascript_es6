// Revisando Objetos

// Criando um objeto

let nome = 'nome';
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
};

console.log(pessoa[nome]);

// Criando um objeto com construtor
const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Miranda';
pessoa2.idade = 25;
pessoa2.falarNome = function() {
  return (`${this.nome} está falando seu nome.`);
};

// Criando um objeto com uma função dentro
const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  }
};

pessoa1.fala();


// Criando um objeto com uma função factory function.
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const pessoa3 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa3.nomeCompleto());

// Criando um objeto com uma função constructor function.
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze(this); // Congela o objeto para não ser alterado também posso fazer com cada chave do objeto.
}

// this = pessoa4 e retorna o objeto
const pessoa4 = new Pessoa('Luiz', 'Miranda');
console.log(pessoa4);

pessoa4.nome = 'Outra coisa'; // Alterando o valor do atributo nome
console.log(pessoa4.nome);
