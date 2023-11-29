// Async await.

// Async await é uma forma de escrever código assíncrono de forma mais simples e legível.

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
        return reject('Erro ao buscar dados.');
      }
      return resolve(frase + '- Resolvido.')
    }, tempo(min, max));
  });
};

// Chamada da promise com async await.
const executa = async () => {
  try {
    const promises = [
      'Primeiro valor',
      falarDepoisDe(1, 5, 'Conectando '),
      falarDepoisDe(1, 5, 'Buscando '),
      // falarDepoisDe(1, 5, 777),
      falarDepoisDe(1, 5, 'Exibindo '),
      'Outro valor'
    ];
    promises.map(async (promise) => console.log(await promise));
  } catch (error) {
    console.log(error);
  }
}

executa();
