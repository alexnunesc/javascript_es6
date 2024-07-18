const path = require('path');
const caminhoDoArquivo = path.resolve(__dirname, 'dados.json');
const { escreve } = require('./modules/escreve')
const { lerArquivo } = require('./modules/ler')


const people = [
  { name: "Alex" },
  { name: "Lucas" },
  { name: "Pedro" }
]

// escreve(caminhoDoArquivo, people)

const main = async () => {
  const result = await lerArquivo(caminhoDoArquivo)
  const data = await JSON.parse(result)
  
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

main();
