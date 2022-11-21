import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  }
  
  
  
  const createTask = (evento) => {
    evento.preventDefault(); //evita que el form actue por defecto
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //tasks es el nombre de la llave que queremos almacenar y esta en localStorage.setItem('tasks',....), los pipelines se usan en caso de que taskList devuelva null, tome por defecto lo que esta a su derecha, en este caso un arreglo.
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
  
    taskList.push(taskObj);
  
    localStorage.setItem('tasks', JSON.stringify(taskList));
  
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