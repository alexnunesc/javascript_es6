// Atribuição via desestruturação (Arrays)
const letras = ['B', 'C', 'D'];
const [a, b, c] = letras;
console.log(a, b, c);

// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(resto);

// Pular valores do array
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Pegando o valor 2 do array [4, 5, 6]
console.log(numeros2[1][2]); // 6
