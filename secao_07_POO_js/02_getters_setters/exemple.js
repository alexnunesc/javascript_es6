// Classe carro 

const _velocidade = Symbol('velocidade'); // Symbol é um identificador único (não é uma string), não pode ser acessado fora da classe.

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1);
c1.velocidade = 90;
console.log(c1.velocidade);
c1.velocidade = 10;
console.log(c1.velocidade);
