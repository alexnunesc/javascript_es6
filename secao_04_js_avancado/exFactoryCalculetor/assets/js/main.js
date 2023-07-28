const criaCalculadora = () => {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta); // eval() executa o código JavaScript passado como uma string e retorna o resultado da execução

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta); // String() converte um valor para string
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btnNum")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btnClear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btnDel")) {
          this.apagaUm();
        }

        if (el.classList.contains("btnEq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };

};

const calculadora = criaCalculadora();
calculadora.inicia();

// console.log(calculadora.display);
// console.log(calculadora.inicia());
// console.log(calculadora.pressionaEnter());
// console.log(calculadora.realizaConta());
// console.log(calculadora.clearDisplay());
// console.log(calculadora.apagaUm());
// console.log(calculadora.cliqueBotoes());
// console.log(calculadora.btnParaDisplay());
