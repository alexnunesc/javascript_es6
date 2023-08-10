// Promises são funções que retornam um valor no futuro.

// Function simuladora de uma chamada assíncrona
// function tempo(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// Exemplo de promise
function falarDepoisDe(tempo, frase) {
  // Resolve é uma função que será chamada quando a promise for atendida.
  // Reject é uma função que será chamada quando a promise for rejeitada.
  return new Promise((resolve, reject) => {
    if (typeof frase !== 'string') {
      return reject(new Error('Erro ao buscar dados.'));
    }
    setTimeout(() => {
      return resolve(frase + '- Resolvido.')
    }, tempo);
  });
};

// Chamada da promise
const promises = [
  'Primeiro valor',
  falarDepoisDe(3000, 'Conectando '),
  falarDepoisDe(500, 'Buscando '),
  falarDepoisDe(1000, 'Exibindo '),
  'Outro valor'
];

// Promise.all() - Retorna todas as promises atendidas.
Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((erro) => console.log(erro));

