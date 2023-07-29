
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
});

console.log(maisVelha);
