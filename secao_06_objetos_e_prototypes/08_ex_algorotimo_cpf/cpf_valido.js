// Valida CPF com algoritmo.
// 705.484.450-52 070.987.720-03.

function ValidaCPF(numberCpf) {
  this.numberCpf = numberCpf;
  let digitoComparacao = 10;
  let menosLength = 2;

  this.convertInArray = () => {
    const result  = numberCpf.replace(/\D+/g, '').split('');
    return result;
  }

  this.somar = () => {
    let total = 0;
    const cpfLimpo = this.convertInArray();
    
    for (let i = 0; i <  cpfLimpo.length - menosLength; i += 1) {
      total += Number(cpfLimpo[i]) * (digitoComparacao - i);
    }
    digitoComparacao += 1;
    menosLength -= 1;
    return total;
  }

  this.digitoFinal = () => {
    const total = this.somar();
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  this.valida = () => {
    let valid;
    let result = [];
    for (let i = 0; i < 2; i += 1) {
      result.push(this.digitoFinal());
    }
    const returno = `${this.numberCpf.slice(0, -2)}${result.join('')}`;

    // valida sequencia
    const sequencia = returno[0].repeat(this.convertInArray().join('').length);

    if (sequencia === this.convertInArray().join('')) {
      valid = 'CPF inválido';
      return valid;
    }

    valid = this.numberCpf === returno ? 'CPF válido' : 'CPF inválido';
    return valid;
  }
}

const s = new ValidaCPF('705.484.450-52');
console.log(s.valida());
