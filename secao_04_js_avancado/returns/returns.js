function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira',
};

console.log(p1);
console.log(p2);


// ###########################################################

// Função retorna outra função

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }

  return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// ###########################################################
// Funçaõ clousure
function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
