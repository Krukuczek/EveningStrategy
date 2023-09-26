export default function Task(title, description, time, priority, done){
    this.title = title;
    this.description = description;
    this.time = time;
    this.priority = priority;
    this.done = Boolean(done); 
};

// export const firstTask = new Task("cleaning", "I need clean my room", 'today', 'important', false);
