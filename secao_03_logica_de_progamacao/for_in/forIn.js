// For in - Estrutura de repetição
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

// For in - Objetos
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Arruda',
    idade: 21
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
