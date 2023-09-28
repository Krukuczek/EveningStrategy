import Task, {createTaskContainer,delNewTaskContainer} from "./createTask.js";
import { lightMode, activeNavbar, createTaskText, createTaskTextOnLoad} from "./futures.js";

let firstTask = new Task("cleaning", "I need clean my room", 'today', 'important', '0');
console.log(firstTask);
let secondTask = new Task("program", "I need clean my room", 'today', 'important', '0');
console.log(secondTask);



document.getElementById('navbarButton').addEventListener('click', activeNavbar);

document.getElementById('circle').addEventListener('click', lightMode);
document.getElementById('newTaskButton').addEventListener('click', createTaskContainer);

createTaskText();
window.onload=createTaskTextOnLoad;