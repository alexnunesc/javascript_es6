// Concateando arrays com o método concat()

const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes2 = ['Wallace', 'Rosana'];

const nomes3 = nomes.concat(nomes2);
console.log(nomes3);

// Outra forma de concatenar arrays é usando o spread operator.
const nomes4 = [...nomes, ...nomes2, 'Alexia'];

console.log(nomes4);
