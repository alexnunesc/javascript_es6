// Reduce - Reduzir o array a um resultado de uma operação matemática ou concatenacao de strings  ou qualquer outro tipo de operação.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somar todos os numeros do array
const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
}, 0);

// console.log(total);

const numerosPares = numeros.reduce((acumulador, valor) => {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

console.log(numerosPares);

// Retorne a pessoa mais velha

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 77},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if(acumulador.idade > valor.idade) {
    return acumulador;
  };
  return valor;
}); // ao deixa o acumulador sem valor inicial, ele pega o primeiro valor do array

console.log(maisVelha);
