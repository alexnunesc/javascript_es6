// Getters e Setters em JavaScript.

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

  // Getter
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  // Setter
  set nomeCompleto(valor) {
    valor = valor.split(' '); // Transforma a string em um array
    this.nome = valor.shift(); // Remove o primeiro elemento do array e retorna o elemento removido
    this.sobrenome = valor.join(' '); // Junta os elementos do array em uma string
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
// Chamando o getter nomeCompleto
console.log(p1.nomeCompleto);
// Chamando o setter nomeCompleto
p2.nomeCompleto = 'Maria Oliveira Silva';
console.log(p2.nomeCompleto);
