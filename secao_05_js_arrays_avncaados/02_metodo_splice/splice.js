// Splice - Altera um array adicionando novos elementos enquanto remove elementos antigos (retorna os itens removidos).

const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

// Remove 2 elementos a partir do indice 3 e adiciona os elementos 'Luiz' e 'Otávio' no lugar.
const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio'); 
console.log(nomes, removidos);

// Remove o primeiro elemento do array.
const removidos2 = nomes.splice(0, 1);

// Adiciona o elemento 'Alexia' no inicio do array.
const adicionados = nomes.splice(0, 0, 'Alexia');

// Remove o ultimo elemento do array.
const removidos3 = nomes.splice(-1, 1);
console.log(nomes, removidos3);

// Não remove nenhum elemento, mas adiciona os elementos 'Luiz' e 'Otávio' a partir do indice 3.
const removidos4 = nomes.splice(3, 0, 'Luiz', 'Otávio');
console.log(nomes, removidos4);
