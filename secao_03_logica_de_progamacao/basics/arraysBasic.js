const alunos = ['Luiz', 'Maria', 'João']; // Array é um objeto indexado, ou seja, cada elemento tem um índice

console.log(alunos); // [ 'Luiz', 'Maria', 'João' ]

console.log(alunos[0]); // Luiz


alunos.unshift('Luiza'); // Adiciona um elemento no início do array
alunos.push('Luiza'); // Adiciona um elemento no final do array

alunos.shift(); // Remove o primeiro elemento do array
alunos.pop(); // Remove o último elemento do array

delete alunos[1]; // Remove o elemento do índice 1, mas não reordena o array

console.log(alunos.slice(0, 3)); // Retorna um novo array com os elementos do índice 0 até o índice 3

alunos.slice(0, -2); // Retorna um novo array com os elementos do índice 0 até o índice -2

console.log(alunos instanceof Array); // true

console.log(typeof alunos); // object tpeof de um array é um objeto
