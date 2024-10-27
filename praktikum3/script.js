function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.ondblclick = function() {
        editTask(taskItem);
    };

    taskItem.onclick = function() {
        deleteTask(taskItem);
    };

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function deleteTask(taskElement) {
    taskElement.remove();
}

function editTask(taskElement) {
    const newTaskText = prompt("Edit your task:", taskElement.textContent);
    if (newTaskText !== null) {
        taskElement.textContent = newTaskText;
    }
}

function changeBackground() {
    const color = document.getElementById('backgroundSelect').value;
    document.body.style.backgroundColor = color;
}

function adjustFontSize() {
    const fontSize = document.getElementById("fontSizeSlider").value;
    document.body.style.fontSize = fontSize + "px";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeFontStyle() {
    document.body.style.fontFamily = document.body.style.fontFamily === 'Arial, sans-serif' ? 'Courier New, monospace' : 'Arial, sans-serif';
}