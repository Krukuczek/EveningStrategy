import Task, {createTaskContainer} from "./createTask.js";
import { lightMode, activeNavbar, createTaskText, createTaskTextOnLoad} from "./futures.js";

document.getElementById('navbarButton').addEventListener('click', activeNavbar);
document.getElementById('circle').addEventListener('click', lightMode);
document.getElementById('newTaskButton').addEventListener('click', createTaskContainer);

createTaskText();
window.onload=createTaskTextOnLoad;