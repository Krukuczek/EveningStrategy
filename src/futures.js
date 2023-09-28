export const lightMode = function () {
    const heading = document.getElementById('heading');
    const mainContainer = document.getElementById('mainContainer');
    if (circle.classList == 'moon') {
        circle.classList.remove('moon');
        circle.classList.add('sun');
        heading.classList.remove('night');
        heading.classList.add('day');
        mainContainer.classList.remove('night');
        mainContainer.classList.add('day');
    } else {
        circle.classList.remove('sun');
        circle.classList.add('moon');
        heading.classList.remove('day');
        heading.classList.add('night');
        mainContainer.classList.remove('day');
        mainContainer.classList.add('night');
    }
};

export const activeNavbar = function () {
    const navbar = document.getElementById('navbar');
    if (!navbar.classList.contains('active')) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active');
    };
};

export const createTaskText = function () {
    document.getElementById('newTaskButton').addEventListener('mouseenter', function(){
        let createTaskText=document.createElement('div');
        createTaskText.classList.add=('popUp');
            let text = document.createElement('span');
            text.innerText='Create New Task';
            let arrow=document.createElement('span');
            arrow.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path d="M24 12l-10-10v7h-14v6h14v7z"/></svg>';
          createTaskText.appendChild(text);
          createTaskText.appendChild(arrow);
        document.getElementById('content').appendChild(createTaskText);
    });
    document.getElementById('newTaskButton').addEventListener('mouseleave', function(){
        console.log("i'm not hovered");
    });
}