// Criando classes em JS
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Método
  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer(assunto) {
    console.log(`${this.nome} está comendo ${assunto}.`);
  }
}

// Criando um objeto a partir da classe Pessoa
// Instanciando a classe Pessoa
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Oliveira');
console.log(p1);
console.log(p2);

// Chamando o método falar()
p1.falar();
// Chamando o método comer()
p2.comer('Pizza');
