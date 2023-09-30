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



export function timePeriod(value) {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    let inYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;
    if (value === 'min') {
        return currentDate;
    } else if (value === 'max') {
        return inYearDate;
    }
}

export const prioritySwitch = function (){
    document.getElementById('important').classList='';
    document.getElementById('normal').classList='';
    document.getElementById('low').classList='';
    document.getElementById(this.id).classList='active';
};