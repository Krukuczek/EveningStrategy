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
    document.getElementById('newTaskButton').addEventListener('mouseenter', function () {
        popUpTaskText();
    });
    document.getElementById('newTaskButton').addEventListener('mouseleave', function () {
        popDownTaskText();
    });
}
export const createTaskTextOnLoad = function () {
    popUpTaskText();
    setTimeout(() => { popDownTaskText() }, 5000);
};

function popUpTaskText() {
    if (!document.getElementById('popUp')) {
        let createTaskText = document.createElement('div');
        createTaskText.id = 'popUp';
        createTaskText.innerText = 'New Task';
        document.getElementById('content').appendChild(createTaskText);
    };
};

function popDownTaskText() {
    if (document.getElementById('popUp')) {
        const element = document.getElementById('popUp');
        element.classList = 'remove';
        setTimeout(() => {
            element.remove();
        }, 300);
    };
};