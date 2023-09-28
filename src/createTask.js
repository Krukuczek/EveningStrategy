export default function Task(title, description, time, priority, done) {
    this.title = title;
    this.description = description;
    this.time = time;
    this.priority = priority;
    this.done = Boolean(done);
};

// export const firstTask = new Task("cleaning", "I need clean my room", 'today', 'important', false);
export const createTaskContainer = function () {
    let taskWindow = document.createElement("div");
    taskWindow.id='taskWindow';
      let taskContainer = document.createElement('div');
      taskContainer.id='taskContainer';
      taskContainer.classList.add(document.getElementById('heading').classList.value);
      taskWindow.appendChild(taskContainer);
    document.getElementById('mainContainer').appendChild(taskWindow);
};