// Promises são funções que retornam um valor no futuro.

// Function simuladora de uma chamada assíncrona
function tempo(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Exemplo de promise
function falarDepoisDe(min, max, frase) {
  // Resolve é uma função que será chamada quando a promise for atendida.
  // Reject é uma função que será chamada quando a promise for rejeitada.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof frase !== 'string') {
        return reject(new Error('Error Teste'));
      }
      return resolve(frase + '- Resolvido.')
    }, tempo(min, max));
  });
};

// Chamada da promise
const promises = [
  falarDepoisDe(1, 4, 'Conectando '),
  falarDepoisDe(1, 4, 'Buscando '),
  falarDepoisDe(1, 4, 'Exibindo '),
];

// Return promise resolvida
const baixaPagina = () => {
  const emCache = false;

  if (emCache) {
    return Promise.resolve('Página em cache.');
  } else {
    return falarDepoisDe(1, 4, 'Baixando página.');
  }
}

// Chamada da promise
baixaPagina()
  .then(dadosPagina => console.log(dadosPagina))
  .catch(e => console.log(e));
