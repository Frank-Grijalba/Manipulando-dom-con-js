import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    evento.preventDefault(); //evita que el form actue por defecto
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY')
    
    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormat
      };
    /*La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave valor. existen dos tipos de almacenamiento: uno llamado session storage y el otro, llamado local storage, en session storage solo permanece la info en esa seccion, una vez se cierra desaparece la info*/
    //sessionStorage.setItem('tasks', JSON.stringify(taskObj)); //JSON.stringify convierte a string un obj
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; /*tasks es el nombre de la llave que queremos almacenar y esta en localStorage.setItem('tasks',....), los pipelines se usan en caso de que taskList devuelva null, tome por defecto lo que esta a su derecha, en este caso un arreglo.
    El JSON.parse se coloca porque del localStorage.setItem convierte de objeto a string pero en getitem necesitamos todo en formato JSON. */ 
    taskList.push({value, dateFormat});
    localStorage.setItem('tasks', JSON.stringify(taskList));

    const task = createTask(taskObj);
    list.appendChild(task);
  }
    
  
  const createTask = ({value, dateFormat}) => {
    const task = document.createElement('li');
    task.classList.add('card'); //card viene de style.css
    const taskContent = document.createElement('div');
    
   
    const titleTask = document.createElement('span');
    titleTask.classList.add('task'); 
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
  };