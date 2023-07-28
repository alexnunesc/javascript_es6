// IIFE - Immediately Invoked Function Expression
// Funções Imediatamente Invocadas

// Função normal
function qualquerCoisa() {
    console.log(123456);
}

qualquerCoisa();

// Função IIFE
(function () {
    console.log(123456);
})();

// Função IIFE com parâmetro
(function (idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = 'Qualquer coisa';

// IIFE protege o escopo global

// console.log(sobrenome); // Erro
// console.log(criaNome('Luiz')); // Erro
// falaNome(); // Erro

// IIFE com arrow function
(() => {
    console.log(123456);
})();

// IIFE com arrow function com parâmetro
((idade, peso, altura) => {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

