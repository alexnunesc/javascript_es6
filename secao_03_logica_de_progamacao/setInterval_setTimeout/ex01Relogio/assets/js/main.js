const escopo = () => {
  const container = document.querySelector('.container');
  const hora = container.querySelector('.hora')
  let seconds = 0;
  let isTimerRunning = false; // Variável de controle para verificar se o temporizador está em execução


  const mostraHora = (seconds) => {
    // Multiplicar por 1000 para converter para milisegundos
    let data = new Date(seconds * 1000);
    // Timezone GMT inicializa o relógio em 00:00:00
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  };

  const timeStart = () => {
    if (!isTimerRunning) {
      intervalId = setInterval(function () {
        seconds += 1;
        hora.style.color = 'green';
        hora.innerHTML = mostraHora(seconds);
  
      }, 1000); // 1000ms = 1s
       isTimerRunning = true; // Define a variável de controle como true para indicar que o temporizador está em execução
    }
  }

  const timeStop = () => {
    hora.style.color = 'red';
    clearInterval(intervalId);
    isTimerRunning = false; // Define a variável de controle como false para indicar que o temporizador não está em execução
  };

  const timeReset = () => {
    clearInterval(intervalId); // Limpa o intervalo e para o relógio
    seconds = 0; // Zera o contador
    hora.style.color = 'black';
    hora.innerHTML = mostraHora(seconds); // Mostra o contador zerado
  };

  const btnStart = document.querySelector('.start');
  const btnStop = document.querySelector('.stop');
  const btnReset = document.querySelector('.reset');

  btnStart.addEventListener('click', function () {
    // clearInterval(intervalId);
    timeStart();
  });

  btnStop.addEventListener('click', function () {
    timeStop();
  });

  btnReset.addEventListener('click', function () {
    timeReset();
  });

};

escopo();
