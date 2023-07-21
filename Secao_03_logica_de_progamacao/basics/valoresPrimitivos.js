// Tipos  primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

let nome = 'Luiz'; // string
nome[0] = 'R'; // Não altera a string
console.log(nome[0], nome); // L Luiz

let a = 'A';
let b = a; // Cópia
console.log(a, b); // A A

a = 'Outra coisa';
console.log(a, b); // Outra coisa A

// Tipos de referência (mutável) - array, object, function

let c = [1, 2, 3];
let d = [...c]; // Cópia por valor (spread operator) - Cria um novo array e copia os valores do array c para o array e (cópia por valor)
let e = d; // Referência (mutável) - Passa o endereço de memória do array c para o array d (cópia por referência)


console.log(c, d); // [ 1, 2, 3 ] [ 1, 2, 3 ]

c.push(4);
console.log(c, d); // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

d.pop();
console.log(c, d); // [ 1, 2, 3 ] [ 1, 2 ]

console.log(e); // [ 1, 2 ]


const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const pessoa2 = {...pessoa}; // Cópia por valor (spread operator) - Cria um novo objeto e copia os valores do objeto pessoa para o objeto pessoa2 (cópia por valor)

pessoa.nome = 'João';
console.log(pessoa); // { nome: 'João', sobrenome: 'Otávio' }
console.log(pessoa2); // { nome: 'Luiz', sobrenome: 'Otávio' }


