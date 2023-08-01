// Object Map
// usando MAP em Objetos

const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
];

// Criando um novo array com os objetos do array pessoas  e ordenando pelo id de forma decrescente
const novasPessoas = new Map();

// Algoritmo para ordenar o array pessoas pelo id de forma decrescente
for (const pessoa of pessoas) {
  const { id } = pessoa;
  // Setando os ids na ordem decrescente
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

// ##############################################################################################################

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}


