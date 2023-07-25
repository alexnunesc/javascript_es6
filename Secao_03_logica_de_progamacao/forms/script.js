// import btnEnviar 
const btnEnviar = document.querySelector('#btnEnviar');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const main = document.querySelector('main');

function escopo() {
  console.log('Escopo de função');
  const pessoas = [];
  let indice = 0;
  
  function createPerson(nome, idade) {
    const pessoa = {
      nome: nome,
      idade: idade,
    };
    pessoas.push(pessoa);
  }
  
  btnEnviar.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão de enviar o formulário
    if (nome.value.length <= 0 || idade.value.length <= 0) {
        return alert('Precisa preencher os campos');
      } else {
        createPerson(nome.value, idade.value);
        const p = document.createElement('p');
        p.innerHTML = `Nome: ${pessoas[indice].nome} - Idade: ${pessoas[indice].idade}`;
        main.appendChild(p);
        indice += 1;
    }
  });
}

escopo(); // invocando a função escopo

