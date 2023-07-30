// Usando o defineProperty para definir propriedades de um objeto e suas características (enumerable, writable, configurable)

// Função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    //  
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar ?
        configurable: true // pode reconfigurar ?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // pode alterar ?
            configurable: false // pode reconfigurar ?
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode alterar ?
            configurable: false // pode reconfigurar ?
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));
delete p1.estoque;
console.log(p1);
