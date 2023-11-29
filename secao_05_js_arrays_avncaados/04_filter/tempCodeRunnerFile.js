// Retorna um array com os nomes que terminam com a letra 'a'.
const pessoas2 = [
  { nome: 'Luiza', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduarda', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeTerminadoComA = pessoas2.filter((obj) => !obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeTerminadoComA);