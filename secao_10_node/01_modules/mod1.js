const nome = "Alex"
const sobreNome = "Nunes"

const falaNome = () => {
  console.log(nome, sobreNome);
}

class Test1 {
  constructor(nome) {
    this.nome = nome;
  }
}

// exports.nome = nome;
// exports.sobreNome = sobreNome;
// this.falaNome = falaNome;
// exports.Test1 = Test1;

// Ou

module.exports = {
  nome,
  sobreNome,
  falaNome,
  Test1
}
