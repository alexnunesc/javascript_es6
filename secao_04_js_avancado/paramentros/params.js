function funcao() {
    console.log(arguments); // arguments é um objeto array-like que contém os argumentos passados para a função (não é um array de fato)
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// arguments não funciona com arrow functions


// ###########################################################

// Também é possível passar parâmetros a mais para a função do que ela espera
function somaTudo(a, b, c) {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    console.log(a, b, c);
    return soma;
}

console.log(somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ###########################################################

// Função com rest operator (...) e parâmetros a mais

function somaTudoRest(a, b, c, ...args) {
    console.log(a, b, c, args);
    return args.reduce((acc, value) => acc + value, 0);
}

// function somaTudoRest(...args) {
//     return args.reduce((acc, value) => acc + value, 0);
// }

console.log(somaTudoRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));







