import { prioritySwitch, timePeriod } from "./futures.js";
import { allTasks } from "./index.js";
import {showAllTasks} from "./showTasks.js";

export const newTask = (taskTitle, taskDescription, taskDate, taskPriority, taskDone) => {
  return {taskTitle, taskDescription, taskDate, taskPriority, taskDone};
};

export const createTaskContainer = function () {
  //create newFullScreenWindow
  let taskWindow = document.createElement("div");
  taskWindow.id = 'taskWindow';
  //create Container inside window
  let taskContainer = document.createElement('div');
  taskContainer.id = 'taskContainer';
  taskContainer.classList.add(document.getElementById('heading').classList.value);
  //create form
  let taskForm = document.createElement('form');
  taskForm.id = 'taskForm';
  //title text *required* 
  let title = document.createElement('textarea');
  title.id = 'title';
  title.placeholder = "Title";
  title.setAttribute('maxlength', '30');
  taskForm.appendChild(title);
  //description text
  let description = document.createElement('textarea');
  description.id = 'description';
  description.placeholder = "Description";
  taskForm.appendChild(description);
  //time date
  let taskDate = document.createElement('input');
  taskDate.id = 'taskDate';
  taskDate.type = 'date';
  taskDate.setAttribute('min', timePeriod('min'));
  taskDate.setAttribute('max', timePeriod('max'));
  taskForm.appendChild(taskDate);
  //priority prio
  let priorityContainer = document.createElement('div');
  priorityContainer.id = 'priority';
  //prio important
  let prioImportant = document.createElement('div');
  prioImportant.id = 'important';
  prioImportant.innerText = 'Important';
  priorityContainer.appendChild(prioImportant);
  //prio normal
  let prioNormal = document.createElement('div');
  prioNormal.id = 'normal';
  prioNormal.classList = 'active';
  prioNormal.innerText = 'Normal';
  priorityContainer.appendChild(prioNormal);
  //prio low
  let prioLow = document.createElement('div');
  prioLow.id = 'low';
  prioLow.innerText = 'Low';
  priorityContainer.appendChild(prioLow);
  taskForm.appendChild(priorityContainer);
  //make task - submit
  let submitTask = document.createElement('input');
  submitTask.type = 'button';
  submitTask.id = 'submitTask';
  submitTask.value = 'Create Task';
  taskForm.appendChild(submitTask);
  //cancel task - X
  let exit = document.createElement('div');
  exit.id = "exitNewTask";
  exit.innerText = "X";
  exit.onclick = 'delNewTaskContainer';
  taskContainer.appendChild(exit);
  taskContainer.appendChild(taskForm);
  taskWindow.appendChild(taskContainer);
  document.getElementById('mainContainer').appendChild(taskWindow);
  newTaskListeners();
};
function newTaskListeners() {
  document.getElementById('exitNewTask').addEventListener('click', delNewTaskContainer);
  document.getElementById('important').addEventListener('click', prioritySwitch);
  document.getElementById('normal').addEventListener('click', prioritySwitch);
  document.getElementById('low').addEventListener('click', prioritySwitch);
  document.getElementById('submitTask').addEventListener('click', createTask);
};

export const delNewTaskContainer = function () {
  document.getElementById('exitNewTask').removeEventListener('click', delNewTaskContainer);
  document.getElementById('important').removeEventListener('click', prioritySwitch);
  document.getElementById('normal').removeEventListener('click', prioritySwitch);
  document.getElementById('low').removeEventListener('click', prioritySwitch);
  document.getElementById('submitTask').removeEventListener('click', createTask);
  const element = document.getElementById('taskWindow');
  element?.remove();
};

const createTask = function () {
  let taskTitle = document.getElementById('title').value;
  let taskDescription = document.getElementById('description').value;
  let taskDate = document.getElementById('taskDate').value;
  let taskPriority;
  if (document.getElementById('important').classList.value === 'active') {
    taskPriority = 'important';
  } else if (document.getElementById('low').classList.value === 'active') {
    taskPriority = 'low';
  } else {
    taskPriority = 'normal';
  }
  let taskDone = false;
  allTasks.push(newTask(taskTitle, taskDescription, taskDate, taskPriority, taskDone));
  showAllTasks();
  delNewTaskContainer();
}

