// Usando new Array (não recomendado)

const arr = new Array(5, 4, 3, 2, 1, 'teste'); // Não é recomendado usar o new Array

console.log(arr);
delete arr[2];
console.log(arr);

// Copia array

const arr2 = [1, 2, 3, 4, 5];

const arr3 = [...arr2]; // Copia o array 2 para o array 3.

console.log(arr3);


// ##########################################################

const nomes1 = ['Eduardo', 'Maria', 'Joana'];

// Slice - Retorna um novo array 'fatiando' o array de acordo com o inicio e fim.
const novo = nomes1.slice(0, -1); // remove o ultimo item do array.
console.log(novo);

// Split - Divide uma string com base em um separador.
const nome = 'Eduardo Santos';
const nomes2 = nome.split(' ');
console.log(nomes2);


// Join - Junta os elementos de um array, usando um separador.
const nomes3 = nomes2.join(' ');
console.log(nomes3);


// ##########################################################

const nomes = ['Eduardo', 'Maria', 'Joana']

// Pop  - Remove o ultimo item do array e retorna o item removido.
const removidos2 = nomes.pop();
console.log(nomes, removidos2);

// Shift - Remove o primeiro item do array e retorna o item removido.
const removidos3 = nomes.shift();
console.log(nomes, removidos3);

// Push - Adiciona um item no final do array e retorna o tamanho do array.
const adicionados = nomes.push('João');
console.log(nomes, adicionados);
