
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Arruda',
    idade: 21
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
