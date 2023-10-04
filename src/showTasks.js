import { allTasks } from "./index.js";
import { timePeriod } from "./futures.js";


export function showAllTasks() {
    function showTaskValues(task,index){
        let taskContent = document.createElement('div');
        taskContent.classList=`task ${task.taskPriority}`;
        taskContent.id=`task_${index}`;
        let keys=Object.keys(task);
        keys.forEach(key => {
            if(key==='taskDone'|| key==='taskPriority'){return 0};
            let element= document.createElement('div');
            element.classList=key;
            if(key==='taskDate' && task[key]===timePeriod('today')){
                element.innerText='Today';
                element.classList='Today';
            }else if(key==='taskDate' && task[key]===timePeriod('tomorrow')){
                element.innerText='Tomorrow';
                element.classList='Tomorrow';
            }else{
                element.innerText=(`${task[key]}`);
            }
            taskContent.appendChild(element);
        });
        content.appendChild(taskContent);
    };
    const content = document.getElementById('tasks');
    content.innerHTML = '';
    allTasks.forEach((task,index) => {
        showTaskValues(task,index);
    });
    console.log(allTasks.length);
};