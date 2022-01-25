const form = document.getElementById("forms");
const taskList = document.getElementById("list");

form.onsubmit = function(e) {
    e.preventDefault();
    const inputTask = document.getElementById("task");
    addTask(inputTask.value);
    form.reset();
}

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);
    newTask.classList.add('box');

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('list-group-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}