// Do While - Estrutura de repetição com teste lógico no final

let contador = 1;
do {
    console.log(`contador = ${contador}`);
    contador += 1;
}
while (contador <= 10);

// Function gerarInteiroAleatorioEntre(min, max)

function gerarInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = gerarInteiroAleatorioEntre(1, 5);

do {
    opcao = gerarInteiroAleatorioEntre(1, 5);
    console.log(`Opção escolhida foi ${opcao}`);
}
while (opcao !== 3);
