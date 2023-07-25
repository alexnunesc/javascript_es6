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
