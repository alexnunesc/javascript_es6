// Herança de classes em JavaScript

// Classe Pai
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        }

        this.ligado = false;
    }
}

// Uso basico da classe pai
const dispositivo = new DispositivoEletronico('telefone');
dispositivo.ligar();
dispositivo.ligar();
dispositivo.desligar();
dispositivo.desligar();

console.log('----------------------------------------');

// Estendendo a classe pai
// Classe Filha
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Chama o construtor da classe pai para inicializar o atributo nome que ele recebe como parametro
        this.cor = cor;
        this.modelo = modelo;
    }
}

// Uso basico da classe filha
const smartphone = new Smartphone('iPhone', 'preto', '11 Pro Max');
console.log(smartphone);
smartphone.ligar();
