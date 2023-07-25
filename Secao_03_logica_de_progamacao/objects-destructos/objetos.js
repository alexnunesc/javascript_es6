// Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição normal
const nam = pessoa.nome;
console.log(nam);

// Atribuição via desestruturação e valor default
const { nome: teste = 'Alex', sobrenome, idade } = pessoa;
console.log(teste, sobrenome, idade);

// Atribuição via desestruturação (Objetos dentro de objetos)
const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);

// ...Resto
const { nome, ...resto } = pessoa;
console.log(nome, resto);
