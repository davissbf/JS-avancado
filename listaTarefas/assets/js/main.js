const listElement = document.querySelector('.container ul');
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');

const tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

function renderTodos() {
    listElement.innerHTML = "";

    for (todo of tarefas) {
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(todo);

        const buttonDelete = document.createElement('button');

        const pos = tarefas.indexOf(todo);
        buttonDelete.setAttribute('onclick', 'deleteTodo('+ pos +')');

        const buttonText = document.createTextNode(' Excluir');

        buttonDelete.appendChild(buttonText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(buttonDelete);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodos() {
  const todoText = inputElement.value;

  if(todoText !== '') {
    tarefas.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }else{
    alert('Antes de adicionar, escreva o nome da terefa!')
  }
}

inputElement.addEventListener('keypress', (e) => {
  const todoText = inputElement.value;

  if(e.keyCode === 13 && todoText !== '') {
    tarefas.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }
});

function clearInput(){
  inputElement.focus();
}

buttonElement.onclick = addTodos;

function deleteTodo(pos) {
    tarefas.splice(0, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas));
}