const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const pessoa2 = {...pessoa}; // Cópia por valor (spread operator) - Cria um novo objeto e copia os valores do objeto pessoa para o objeto pessoa2 (cópia por valor)

pessoa.nome = 'João';
console.log(pessoa); // { nome: 'João', sobrenome: 'Otávio' }
console.log(pessoa2); // { nome: 'Luiz', sobrenome: 'Otávio' }
