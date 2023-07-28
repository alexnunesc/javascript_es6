const escopo = () => {
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const resultado = document.querySelector('#resultado');
  const campo = document.querySelectorAll('.campo');
  const cor = document.querySelectorAll('.cor');
  const cor1 = document.querySelectorAll('.cor1');
  let imc = 0;

  const btnEnviar = document.querySelector('.botao');

  const calcularIMC = () => {
    imc = peso.value / (altura.value ** 2);
    // alert(imc);
    return imc;
  };

  const criarCor = (imc) => {
    if (imc < 18.5) {
      return '#FF0000';
    } else if (imc < 25) {
      return '#00FF00';
    } else if (imc < 30) {
      return '#FFFF00';
    } else if (imc < 35) {
      return '#FFA500';
    } else if (imc < 40) {
      return '#FF0000';
    } else {
      return '#FF0000';
    }
  };

  const classificarIMC = (imc) => {
    switch (true) {
      case imc < 18.5:
        return 'abaixo do peso';
      case imc < 25:
        return 'com peso ideal';
      case imc < 30:
        return 'levemente acima do peso';
      case imc < 35:
        return 'com obesidade grau I';
      case imc < 40:
        return 'com obesidade grau II';
      default:
        return 'com obesidade grau III';
    }
  };
  

  const exibirResultado = () => {
    const imcLimites = [18.5, 25, 30, 35, 40];
    for (let i = cor.length - 1; i >= 0; i -= 1) {
      if (imc > imcLimites[i]) {
        cor[i].className = 'actvieColor';
        cor1[i].className = 'actvieColor1';
        document.querySelector('.actvieColor').style.backgroundColor = criarCor(imc);
        document.querySelector('.actvieColor1').style.backgroundColor = criarCor(imc);
        break;
      }
    }
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está ${classificarIMC(imc)}`;

  }

  const limparCampos = () => {
    for (let i = 0; i < campo.length; i++) {
      campo[i].value = '';
    }
  }

  const executar = (event) => {
    event.preventDefault();
    calcularIMC();
    exibirResultado();
    limparCampos();
  }

  btnEnviar.addEventListener('click', executar);
};

escopo();
