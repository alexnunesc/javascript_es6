const escopo = () => {
  const resultado = document.querySelector('#resultado');
  const btnEnviar = document.querySelector('.botao');

  const coresIMC = [
    '#ae3a01', // IMC < 18.5
    '#00FF00', // 18.5 <= IMC < 25
    '#FFFF00', // 25 <= IMC < 30
    '#FFA500', // 30 <= IMC < 35
    '#FF0000', // 35 <= IMC < 40
    '#5f0000'  // IMC >= 40
  ];

  let message = '';

  const changeAndRemove = (id, msg, imc) => {
    if (id < 6) {
      document.getElementById(`${id}`).style.backgroundColor = coresIMC[id]
      document.getElementById(`${id + 6}`).style.backgroundColor = coresIMC[id]
  
      document.getElementById(`${id}`).className = "actvieColor";
      document.getElementById(`${id + 6}`).className = "actvieColor";
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está ${msg}`;
      return;
    }

    resultado.innerHTML = `${msg}`;
  }

  const defineMessage = (imc) => {
    switch (true) {
      case imc < 18.5:
        changeAndRemove(0, 'abaixo do peso', imc);
        return;
      case imc < 25:
        changeAndRemove(1, 'está com o peso ideal', imc);
        return;
      case imc < 30:
        changeAndRemove(2, 'está levemente acima do peso', imc);
        return;
      case imc < 35:
        changeAndRemove(3, 'está com obesidade grau I', imc);
        return;
      case imc < 40:
        changeAndRemove(4, 'está com obesidade grau II', imc);
        return;
      case imc >= 40:
        changeAndRemove(5, 'está com obesidade grau III', imc);
        return;
      default:
        changeAndRemove(6, 'Digiter seu peso e altura', imc);
        // message = `Digiter seu peso e altura`;
        return;
    }

    // resultado.innerHTML = message;
  };

  const formatField = () => {
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');

    const imc = peso.value / (altura.value ** 2);
    console.log("imc", imc);

    // Remover a classe 'actvieColor' se ela já existe
    const existingActvieColorElements = document.querySelectorAll('.actvieColor');

    if (existingActvieColorElements.length > 0) {
      for (let i = 0; i < existingActvieColorElements.length; i++) {
        existingActvieColorElements[i].style.backgroundColor = "white"; // Remover a cor de fundo
        existingActvieColorElements[i].className = "cor"; // Remover a classe
      }      
    }

    altura.value = '';
    peso.value = '';
    defineMessage(imc);
  }

  btnEnviar.addEventListener('click', () => formatField());
};

escopo();
