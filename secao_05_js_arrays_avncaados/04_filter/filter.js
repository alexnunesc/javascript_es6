// Filter - Filtrando o array com base em uma condição.

// Exemplo 1: filtrando números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Retorna um array com os números pares.
const numerosPares = numeros.filter((valor) => valor % 2 === 0);
console.log(numerosPares);

// Outra forma de fazer a mesma coisa.
const numerosPares2 = numeros.filter(function(valor, indice, array) {
  // console.log('valor', valor, 'indice', indice, 'array', array);
  return valor % 2 === 0;
});
console.log(numerosPares2);

// #############################################################
// Exemplo 2: filtrando pessoas que tem o nome com mais de 5 letras.

// Retorna um array com os nomes que tem mais de 5 letras.
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length > 5);
console.log(pessoasComNomeGrande);

// #############################################################
// Exemplo 3: filtrando pessoas que tem o nome terminado com a letra 'a'.

// Retorna um array com os nomes que terminam com a letra 'a'.
const pessoas2 = [
  { nome: 'Luiza', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduarda', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeTerminadoComA = pessoas2.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeTerminadoComA);


