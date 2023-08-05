// Métodos estáticos e de instância

class ControleRemoto {
    constructor(marca) {
        this.marca = marca;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar as pilhas.');
        console.log(this); // this não aponta para a instância, mas sim para a classe pai.
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
console.log('----------------------------------------');
// .................................................
ControleRemoto.trocaPilha(); // Método estático não precisa de instância para ser chamado e só pode ser chamado pela classe pai (ControleRemoto) e não pela classe filha (Smartphone)
console.log('----------------------------------------');
