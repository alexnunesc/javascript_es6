// While  - Estrutura de repetição com teste lógico no início

// let contador = 1;
// while (contador <= 10) {
//     console.log(`contador = ${contador}`);
//     contador += 1;
// }

// Function gerarInteiroAleatorioEntre(min, max)
function gerarInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = gerarInteiroAleatorioEntre(1, 5);

while (opcao !== 3) {
  opcao = gerarInteiroAleatorioEntre(1, 5);
  console.log(`Opção escolhida foi ${opcao}`);
}
