// Promises são funções que retornam um valor no futuro.

// Function simuladora de uma chamada assíncrona
function tempo(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Exemplo de promise
function falarDepoisDe(min, max, frase) {
  // Resolve é uma função que será chamada quando a promise for atendida.
  // Reject é uma função que será chamada quando a promise for rejeitada.
  return new Promise((resolve, reject) => {
    if (typeof frase !== 'string') {
      return reject(new Error('Erro ao buscar dados.'));
    }
    setTimeout(() => {
      return resolve(frase)
    }, tempo(min, max));
  });
};

// Chamada da promise
// Tratando o retorno da promise
falarDepoisDe(1, 3, 'Conectando ')
  .then((frase1) => {
    console.log(frase1.concat('ao banco de dados...'))
    return falarDepoisDe(1, 3, 'Buscando ');
  })
  .then((frase2) => {
    console.log(frase2.concat('dados...'))
    return falarDepoisDe(1, 3, 'Exibindo ');
  })
  .then((frase3) => {
    console.log(frase3.concat('dados...'))
  })
  .catch((e) => console.log(e));

console.log('Executa antes da promise ser atendida.');
