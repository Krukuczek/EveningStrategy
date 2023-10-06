import {createTaskContainer, newTask} from "./createTask.js";
import { lightMode, activeNavbar, createTaskText, createTaskTextOnLoad, taskDoneSwitch} from "./futures.js";
import { showAllTasks } from "./showTasks.js";

export let allTasks= new Array;

document.getElementById('navbarButton').addEventListener('click', activeNavbar);
document.getElementById('circle').addEventListener('click', lightMode);
document.getElementById('newTaskButton').addEventListener('click', createTaskContainer);

createTaskText();
window.onload=createTaskTextOnLoad;

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    console.log('storageAvaible');
  } else {
    // Too bad, no localStorage for us
    console.log('storageNotAvaible');
  }

allTasks.push(newTask("Create Task", "lLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, nemo ratione? A accusamus officia suscipit aliquam, maiores ea, omnis labore vel quam molestiae praesentium porro cumque similique, laudantium totam ipsam.","2023-10-04", "normal",true));
allTasks.push(newTask("Create Task", "lLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, nemo ratione? A accusamus officia suscipit aliquam, maiores ea, omnis labore vel quam molestiae praesentium porro cumque similique, laudantium totam ipsam.","2023-10-07", "important",false));
allTasks.push(newTask("Create Task", "lLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, nemo ratione? A accusamus officia suscipit aliquam, maiores ea, omnis labore vel quam molestiae praesentium porro cumque similique, laudantium totam ipsam.","2023-10-11", "low",false));
showAllTasks();
taskDoneSwitch();
// localStorage.setItem("allTasks",allTasks);
// console.log(localStorage.getItem(allTasks[0]));
// localStorage.removeItem(allTasks[0],"XD");