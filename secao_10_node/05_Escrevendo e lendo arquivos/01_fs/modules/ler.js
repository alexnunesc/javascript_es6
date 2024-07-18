const fs = require('fs').promises;

const lerArquivo = async (caminho) => {
  const dados = await fs.readFile(caminho, 'utf8')
  return dados
}

module.exports = {
  lerArquivo
}
