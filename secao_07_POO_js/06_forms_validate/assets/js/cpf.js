class ValidCpf {

  constructor(cpfEnviado) {
    // cpfLimpo é uma propriedade que não pode ser alterada, enumerada ou configurada. que recebe o cpfEnviado sem os caracteres não numéricos. e retorna o cpfEnviado sem os caracteres não numéricos.
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '') // /\D+/g = tudo que não for número
    });
  }

  static criaDigito(cpfSemDigito) {
    const cpfArray = Array.from(cpfSemDigito); // transforma string em array
    
    let regressivo = cpfArray.length + 1; // 10 -> 11 etc
    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val)); // Number(val) transforma string em number
      regressivo -= 1; // decrementa 1 a cada loop do reduce, 10 -> 9 etc
      return ac; // acumulador recebe o valor de ac + regressivo * Number(val)
    }, 0); // 0 é o valor inicial de ac
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); // se digito > 9 retorna 0, senão retorna digito.
  }
  
  isSequence() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
  }

  valid() {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequence()) return false

    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidCpf.criaDigito(cpfSemDigito); // precisar usar o nome da classe para chamar o método estático, e não o this.
    const digito2 = ValidCpf.criaDigito(cpfSemDigito + digito1);

    const novoCpf = cpfSemDigito + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
  }

}

// const cpf = new ValidCpf('705.484.450-52');
// console.log(cpf.valid);

// export default ValidCpf;
