// Maneira de criar uma função

// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
    console.log('Sou uma arrow function');
};

arrowFunction();

// Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando...');
    },
};

obj.falar();

// Parâmetros

const funcaoComParametro = function (parametro) {
    console.log(parametro);
};

funcaoComParametro('Olá');

// Retorno

const funcaoComRetorno = function (parametro) {
    return `Retorno ${parametro}`;
};

console.log(funcaoComRetorno('Olá'));
