// Ferctory Functions + Prototypes

// Factory Function
function criaPessoa(nome, sobrenome) {

  // Prototype (objeto que será usado como protótipo) - não é o prototype da função criaPessoa e sim o prototype do objeto que será criado por essa função (pessoaPrototype).
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },

    comer() {
      console.log(`${this.nome} está comendo.`);
    },

    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };

  // retorna um objeto com o prototype definido acima e com as propriedades nome e sobrenome
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

// cria os objetos com o prototype definido acima e com as propriedades nome e sobrenome
const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
p1.falar();
p2.comer();

