const qtd = document.querySelector('.qtd-caracteres');
const btnGerarSenha = document.querySelector('.btn-gerar-senha');
const senhaGerada = document.querySelector('.senha-gerada');

function Escopo() {
  const inputQuantidade = document.querySelector('.qtd-caracteres');

  let valorAtualizado = 0;
  inputQuantidade.addEventListener('input', () => {
      valorAtualizado = qtd.value;
  });

  btnGerarSenha.addEventListener('click', () => {
    const incluirLetrasMaiusculas = document.querySelector('.chk-maiusculas');
    const incluirLetrasMinusculas = document.querySelector('.chk-minusculas');
    const incluirNumeros = document.querySelector('.chk-numeros');
    const incluirSimbolos = document.querySelector('.chk-simbolos');

    const novaSenha = gera.GeraNovaSenha(incluirLetrasMaiusculas.checked, incluirLetrasMinusculas.checked, incluirNumeros.checked, incluirSimbolos.checked, valorAtualizado);
    senhaGerada.innerHTML = novaSenha;
  });

  const showToastButton = document.getElementById('showToast');
  const toast = document.querySelector('.toast');

  // showToastButton.addEventListener('click', () => {
  //   toast.style.display = 'block';
  //   setTimeout(() => {
  //     toast.style.display = 'none';
  //   }, 3000); // 3 seconds
  // });

}

Escopo();
