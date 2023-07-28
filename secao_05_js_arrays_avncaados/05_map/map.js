// Usando o map para dobrar os valores de um array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobrando os valores do array.
const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);

// Para cada elemento:

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

// Adicione uma chave id em cada objeto
const comIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj }; // Copiando o objeto.
  newObj.id = indice + 1; // Adicionando a chave id.
  return newObj;
});

console.log(comIds);