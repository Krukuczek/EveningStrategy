import Task from "./task.js";

let firstTask = new Task("cleaning", "I need clean my room", 'today', 'important', '0');
console.log(firstTask);
let secondTask = new Task("program", "I need clean my room", 'today', 'important', '0');
console.log(secondTask);


const navbar = document.getElementById('navbar');
document.getElementById('navbarButton').addEventListener('click', function () {
    if (!navbar.classList.contains('active')) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active');
    };
});

const circle = document.getElementById('circle');
circle.addEventListener('click', function(){
    const heading=document.getElementById('heading');
    const mainContainer=document.getElementById('mainContainer');
    if(circle.classList=='moon'){
        circle.classList.remove('moon');
        circle.classList.add('sun');
        heading.classList.remove('night');
        heading.classList.add('day');
        mainContainer.classList.remove('night');
        mainContainer.classList.add('day');
    }else{
        circle.classList.remove('sun');
        circle.classList.add('moon');
        heading.classList.remove('day');
        heading.classList.add('night');
        mainContainer.classList.remove('day');
        mainContainer.classList.add('night');
    }
});