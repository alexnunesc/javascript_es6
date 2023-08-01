// Factory Function + Prototypes

// Prototype (objeto que será usado como protótipo) - não é o prototype da função criaPessoa e sim o prototype do objeto que será criado por essa função (pessoaPrototype).
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// cria o objeto que será usado como protótipo
const pessoaPrototype = { ...falar, ...comer, ...beber };
// const pessoaPrototype2 = Object.assign({}, falar, comer, beber);

// Factory Function
function criaPessoa(nome, sobrenome) {

  return  Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });

}

// cria os objetos com o prototype definido acima e com as propriedades nome e sobrenome
const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
const p3 = criaPessoa('João', 'O.');

p1.falar();
p2.comer();
p3.beber();
