import { allTasks } from "./index.js";
import { timePeriod } from "./futures.js";

function displayTask(task, index, tasksContainer) {
    let taskContent = document.createElement('div');
    taskContent.classList = `task ${task.taskPriority} done_${task.taskDone}`;
    taskContent.id = `task_${index}`;
    let keys = Object.keys(task);
    keys.forEach(key => {
        let element = document.createElement('div');
        element.classList = key;
        switch (key) {
            case 'taskDone':
                taskContent.appendChild(element);
                break;
            case 'taskPriority':
                break;
            case 'taskDate':
                if (task[key] === timePeriod('today')) {
                    element.innerText = 'Today';
                    element.classList = 'today';
                }else if (task[key] === timePeriod('tomorrow')) {
                    element.innerText = 'Tomorrow';
                    element.classList = 'tomorrow';
                }else if (task[key] < timePeriod('today')) {
                    element.innerText = "Outstanding";
                    element.classList.add('outstanding');
                }else{
                    element.innerText = task[key];
                }
                taskContent.appendChild(element);
                break;
            default:
                element.innerText = (`${task[key]}`);
                taskContent.appendChild(element);
                break;
        }
    });
    tasksContainer.appendChild(taskContent);
};

export function showAllTasks() {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';
    allTasks.forEach((task, index) => {
        displayTask(task, index, tasksContainer);
    });
};