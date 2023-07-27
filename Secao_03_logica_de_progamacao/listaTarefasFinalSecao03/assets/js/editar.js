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

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefaEditadaIndex = tarefas.indexOf(tarefaEditada);
    return tarefaEditadaIndex;
  }
});

const finishEdit = () => {
  const editar = container.querySelector('.btn');
  const tarefaEditada = inputTarefa.value;

    if (editar) {
      editar.classList.remove('btn');
      editar.classList.add('editarNone');
      btn.classList.remove('editarNone');
      btn.classList.add('btn');
    };

    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    tarefas.splice(tarefaEditadaIndex, 1, tarefaEditada);
    const tarefasJSON = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    inputTarefa.value = '';
};