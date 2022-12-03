import { createTask } from "./addTask.js";
import { dateElement } from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const readTasks = () => {
    const list = document.querySelector('[data-list]');
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const dates = uniqueDates(taskList);

    dates.forEach( (date) => {
        taskList.forEach((task) => {
            list.appendChild(dateElement(task.dateFormat));
            list.appendChild(createTask(task));
        });
    })
//2:21
    
};