// Function factory function (função fábrica de objetos)

// Função que cria um objeto

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' '); // Separa os elementos do array
      this.nome = valor.shift(); // Remove o primeiro elemento do array
      this.sobrenome = valor.join(' '); // Junta os elementos do array
    },
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },
    altura,
    peso,
    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80); // Factory function
p1.nomeCompleto = 'Maria Oliveira Silva'; // Setter
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto); // Getter
console.log(p1.fala('falando sobre JS')); // Método fala
console.log(p1.imc);
console.log('----------------------');
