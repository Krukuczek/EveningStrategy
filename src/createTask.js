export default function Task(title, description, taskDate, priority, done) {
    this.title = title;
    this.descrdescriptioniption = description;
    this.taskDate = taskDate;
    this.priority = priority;
    this.done = Boolean(done);
};

export const createTaskContainer = function () {
    //create newFullScreenWindow
    let taskWindow = document.createElement("div");
    taskWindow.id='taskWindow';
      //create Container inside window
      let taskContainer = document.createElement('div');
      taskContainer.id='taskContainer';
      taskContainer.classList.add(document.getElementById('heading').classList.value);
        //create form
        let taskForm = document.createElement('form');
        taskForm.id='taskForm';
          //title text *required* 
          let title=document.createElement('textarea');
          title.id='title';
          title.placeholder="Title";
          title.setAttribute('maxlength','20');
          taskForm.appendChild(title);
          //description text
          let description=document.createElement('textarea');
          description.id='description';
          description.placeholder="Description";
          taskForm.appendChild(description);
          //time date
          let taskDate=document.createElement('input');
          taskDate.id='taskDate';
          taskDate.type='date';
          taskForm.appendChild(taskDate);
          //priority radio
          let priorityContainer = document.createElement('div');
          priorityContainer.id='priority';
            //radio important
            let radioImportant = document.createElement('input');
            radioImportant.type='radio';
            radioImportant.id='important';
            radioImportant.name='priority';
            radioImportant.value='important';
            priorityContainer.appendChild(radioImportant);
            //radio normal
            let radioNormal = document.createElement('input');
            radioNormal.type='radio';
            radioNormal.id='normal';
            radioNormal.name='priority';
            radioNormal.value='normal';
            priorityContainer.appendChild(radioNormal);
            //radio low
            let radioLow = document.createElement('input');
            radioLow.type='radio';
            radioLow.id='low';
            radioLow.name='priority';
            radioLow.value='low';
            priorityContainer.appendChild(radioLow);
          taskForm.appendChild(priorityContainer);
          //make task - submit
          let submitTask = document.createElement('input');
          submitTask.type='button';
          submitTask.id='submitTask';
          submitTask.value='Create Task';
          taskForm.appendChild(submitTask);
        let exit=document.createElement('div');
        exit.id="exitNewTask";
        exit.innerText="X";
        exit.onclick='delNewTaskContainer';
        taskContainer.appendChild(exit);
        taskContainer.appendChild(taskForm);
      taskWindow.appendChild(taskContainer);
    document.getElementById('mainContainer').appendChild(taskWindow);
    exitListener();
};
function exitListener(){
    document.getElementById('exitNewTask').addEventListener('click', delNewTaskContainer);
};

export const delNewTaskContainer = function () {
    document.getElementById('exitNewTask').removeEventListener('click', delNewTaskContainer);
    const element=document.getElementById('taskWindow');
    element?.remove();
};