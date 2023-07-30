// Copiando objetos e alterando propriedades
const produto = { nome: 'Caneta', preco: 1.8 };
const caneta = { ...produto };
caneta.nome = 'Caneta Bic';
console.log(produto);
console.log(caneta);

// Clonando objetos e alterando propriedades
const produto2 = { nome: 'Caneta', preco: 1.8 };
const caneta2 = Object.assign({}, produto2, { nome: 'Caneta Bic' });
console.log(produto2);
console.log(caneta2);

// Object.keys() - retorna as chaves do objeto
console.log(Object.keys(produto2));

// Object.values() - retorna os valores do objeto
console.log(Object.values(produto2));

// Object.entries() - retorna um array com as chaves e valores do objeto
console.log(Object.entries(produto2));

// Object.freeze() - congela o objeto, não permite alterações
const produto3 = { nome: 'Caneta', preco: 1.8 };
Object.freeze(produto3);
produto3.nome = 'Caneta Bic';
console.log(produto3);

// Object.isFrozen() - verifica se o objeto está congelado
const produto4 = { nome: 'Caneta', preco: 1.8 };
console.log(Object.isFrozen(produto4));

// Object.seal() - sela o objeto, não permite adicionar ou remover propriedades, mas permite alterações
Object.seal(produto4);
produto4.nome = 'Caneta Bic';
produto4.descricao = 'Caneta azul';
delete produto4.preco;
console.log(produto4);

// getOwnPropertyDescriptor() - retorna as propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(produto4, 'nome'));

console.log(Object.getOwnPropertyDescriptor(produto4, 'preco'));
