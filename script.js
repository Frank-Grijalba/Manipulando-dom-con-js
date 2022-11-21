import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (evento) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  list.appendChild(task);
}


const createTask = (evento) => {
  evento.preventDefault(); //evita que el form actue por defecto
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY')

  //tarjeta
  const task = document.createElement('li');
  task.classList.add('card'); //card viene de style.css
  input.value = '';
  const taskContent = document.createElement('div');

  const taskObj = {
    value,
    dateFormat
  };

  /*La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave valor. existen dos tipos de almacenamiento: uno llamado session storage y el otro, llamado local storage, en session storage solo permanece la info en esa seccion, una vez se cierra desaparece la info*/
  //sessionStorage.setItem('tasks', JSON.stringify(taskObj)); //JSON.stringify convierte a string un obj

  localStorage.setItem('tasks', JSON.stringify(taskObj));

  const titleTask = document.createElement('span');
  titleTask.classList.add('task'); 
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  return task;
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
