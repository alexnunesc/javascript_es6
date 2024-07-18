const fs = require('fs').promises;


const escreve = (caminhoDoArquivo, dados) => {
  const arquivo = JSON.stringify(dados, '', 2);
  fs.writeFile(caminhoDoArquivo, arquivo, { flag: 'w' })
}

module.exports = {
  escreve
};

// fs.writeFile(caminhoDoArquivo, "Dados do arquivo\n", {
//   flag: 'w', // Apaga os dados d=se o arquivo já existir
//   flag: 'a', // Escreve novamente mantendo os dados anteriores
//   encoding: 'utf8'
// })
