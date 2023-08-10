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
  falarDepoisDe(1, 4, 100),
  falarDepoisDe(1, 4, 'Exibindo '),
];

// Promise.all() - Retorna todas as promises atendidas.
Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro));

