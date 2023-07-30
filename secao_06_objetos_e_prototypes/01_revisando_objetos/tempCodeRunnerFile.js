// Criando um objeto com uma função dentro
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
// const resultado = pessoa3.nomeCompleto;
console.log(pessoa3.nomeCompleto());
