const executa = async () => {
  try {
    const promises = [
      'Primeiro valor',
      falarDepoisDe(1, 5, 'Conectando '),
      falarDepoisDe(1, 5, 'Buscando '),
      falarDepoisDe(1, 5, 777),
      falarDepoisDe(1, 5, 'Exibindo '),
      'Outro valor'
    ];
    promises.map(async (promise) => console.log(await promise));
  } catch (error) {
    console.log(error);
  }
}

executa();