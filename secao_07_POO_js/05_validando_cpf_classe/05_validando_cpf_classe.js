// Valida CPF com algoritmo.
// 705.484.450-52 070.987.720-03.

class ValidarCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '') // /\D+/g = tudo que não for número
    });
  }

  isSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  static geraDigito(cpfSemDigito) {
    let total = 0;
    let reverso = cpfSemDigito.length + 1; // 10 -> 11 etc

    for (let i of cpfSemDigito) {
      total += reverso * Number(i);
      reverso -= 1;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  geraNovoCpf() {
    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidarCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidarCPF.geraDigito((cpfSemDigito + digito1));
    return this.novoCPF = cpfSemDigito + digito1 + digito2;
  }

  get valida() {
    let resultValid = '';
    if (typeof this.cpfLimpo === 'undefined') {
      resultValid = 'CPF inválido';
    }
    if (this.cpfLimpo.length !== 11) {
      resultValid = 'CPF inválido';
    }
    if (this.isSequencia()) {
      resultValid = 'CPF inválido';
    }
    resultValid = this.geraNovoCpf() === this.cpfLimpo ? 'CPF válido' : 'CPF inválido';

    return resultValid;
  }

}

const cpf = new ValidarCPF('705.484.450-52');
console.log(cpf.valida);

