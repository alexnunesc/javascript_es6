const fs = require('fs').promises;
const { count } = require('console');
const path = require('path');

// Ler o conteúdo da pasta atual.

const readDir = async (rootDir) => {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);

  walk(files, rootDir);
};

const walk = async (files, rootDir) => {
  for (let i = 0; i < files.length; i += 1) {
    const fileFullPath = path.resolve(rootDir, files[i]); // caminho completo do arquivo.
    const stats = await fs.stat(fileFullPath); // informações do arquivo.

    if( /\.git/g.test(fileFullPath)) {
      continue; // se for um arquivo git, não executa o código abaixo e voltaa executar o for, com os arquivos dentro da pasta encontrada.
    }

    if( /node_modules/g.test(fileFullPath)) {
      continue; // se for um arquivo node_modules, não executa o código abaixo e voltaa executar o for, com os arquivos dentro da pasta encontrada.
    }



    // Se é um diretório ou não.
    if(stats.isDirectory()) {
      readDir(fileFullPath); // recursividade.
      continue; // se for um diretório, não executa o código abaixo e voltaa executar o for, com os arquivos dentro da pasta encontrada. 
    };

    if(!/\.css$/g.test(fileFullPath)) continue; // se não for um arquivo css, não executa o código abaixo e voltaa executar o for, com os arquivos dentro da pasta encontrada.

    console.log(fileFullPath ,files[i], stats.isDirectory()); // caminho completo do arquivo, nome do arquivo, se é um diretório ou não.
  }
};

readDir("/home/nunes/progamacao/cursos/javascript_es6/")
