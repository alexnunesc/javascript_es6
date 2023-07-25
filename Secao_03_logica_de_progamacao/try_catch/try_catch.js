// Try Catch - Tratamento de erros


const tryCatch = (naoExisto) => {
  try {
    console.log(naoExisto);
    if (naoExisto === 'oi') {
      throw new Error('naoExisto não existe.');
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log('Sempre sou executado');
  }
};

tryCatch('oi');

// Exemplo 2

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(data);
  console.log(hora);
} catch (err) {
  // Tratar erro
  // console.log(err);
} finally {
  console.log('Tenha um bom dia.');
}

console.log(retornaHora());

