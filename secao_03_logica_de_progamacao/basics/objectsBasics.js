const alunos = {};

const alunos2 = (nome, sobrenome, idade) => {
    return { nome, sobrenome, idade };
}

const aluno1 = alunos2('Luiz', 'Otávio', 30);
const aluno2 = alunos2('Maria', 'Oliveira', 32);
const aluno3 = alunos2('João', 'Moreira', 25);

alunos[aluno1.nome] = aluno1;
alunos[aluno2.nome] = aluno2;
alunos[aluno3.nome] = aluno3;


console.log(alunos);


const pessoa01 = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30,

  fala() { // Método
    console.log(`${this.nome} diz: A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() { // Método
    this.idade++;
  }
};

pessoa01.fala(); // Luiz diz: A minha idade atual é 30.
pessoa01.incrementaIdade(); // Incrementa a idade em 1
pessoa01.fala(); // Luiz diz: A minha idade atual é 31.
