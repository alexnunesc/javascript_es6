const escopo = () => {
  const container = document.querySelector('.container');

  const ul = container.querySelector('ul');

  const btn = container.querySelector('.btn');

  const inputTarefa = container.querySelector('.input-tarefa');

  const btnTarefa = container.querySelector('.btn-tarefa');

  const btnEditFinished = container.querySelector('.btn-editar');

  let tarefaEditadaIndex;

  const salvarTarefas = (textoInput) => {
    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    listaDeTarefas.push(textoInput);
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    return carregaTarefas();
  };

  const criaTarefa = (textoInput) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const btnApagar = document.createElement('button');
    const btnEditar = document.createElement('button');

    span.innerText = textoInput;
    // span.className = textoInput;
    inputTarefa.value = '';
    
    btnApagar.innerText = 'Apagar';
    btnEditar.innerText = 'Editar';
    btnEditar.setAttribute('class', 'editar');
    btnApagar.setAttribute('class', 'apagar');

    li.appendChild(span);
    li.appendChild(btnApagar);
    li.appendChild(btnEditar);
    ul.appendChild(li);
  };

  const carregaTarefas = () => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    for (let tarefa of tarefas) {
      criaTarefa(tarefa);
    };
  };

  btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) {
      return alert('Você deve digitar uma tarefa!');
    };
    salvarTarefas(inputTarefa.value);
  });

  ul.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
      el.parentElement.remove(); // Remove o elemento pai do botão apagar
      const tarefas = JSON.parse(localStorage.getItem('tarefas'));
      const tarefaApagada = el.parentElement.innerText;
      const tarefaIndex = tarefas.indexOf(tarefaApagada);
      tarefas.splice(tarefaIndex, 1); // Remove o elemento do array de tarefas com base no índice
      const tarefasJSON = JSON.stringify(tarefas);
      localStorage.setItem('tarefas', tarefasJSON);
    }
  });

  ul.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('editar')) {
      const editar = container.querySelector('.editarNone');
      if (editar) {
        editar.classList.remove('editarNone');
        editar.classList.add('btn');
        btn.classList.remove('btn');
        btn.classList.add('editarNone');
      };

      const tarefaEditada = el.parentNode.firstChild;
      console.log( typeof tarefaEditada.innerText);

      let input = document.getElementsByClassName('input-tarefa')[1];

      input.value = tarefaEditada.innerText;

      tarefaEditadaIndex = Array.from(el.parentNode.children).indexOf(el.parentNode.firstChild);

      console.log(tarefaEditadaIndex, 'tarefaEditadaIndex');

      return tarefaEditadaIndex;
    }
  });
  
  const finishEdit = () => {
    console.log('finishEdit');
    const editar = container.querySelector('.btn');
    const tarefaEditada = document.getElementsByClassName('input-tarefa')[1].value;
  
      if (editar) {
        editar.classList.remove('btn');
        editar.classList.add('editarNone');
        btn.classList.remove('editarNone');
        btn.classList.add('btn');
      };
  
      const tarefas = JSON.parse(localStorage.getItem('tarefas'));
      console.log('sfsv', tarefaEditadaIndex);
      tarefas.splice(tarefaEditadaIndex, 1, tarefaEditada);
      const tarefasJSON = JSON.stringify(tarefas);
      localStorage.setItem('tarefas', tarefasJSON);
      // inputTarefa.value = '';
      const span = document.querySelectorAll('span')[tarefaEditadaIndex];
      span.innerText = tarefaEditada;
  };

  btnEditFinished.addEventListener('click', function () {
    finishEdit();
  });

  carregaTarefas();

};

escopo();
