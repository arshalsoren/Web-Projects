const form = document.getElementById('form');
const input = document.getElementById('input');
const tasksAll = document.getElementById('tasks');

const tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks) {
    tasks.forEach((task) => {
        addTasks(task);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTasks();
});

function addTasks(task) {
    let taskText = input.value;

    if (task) {
        taskText = task.text;
    }

    if (taskText) {
        const newTask = document.createElement("li");
        if (task && task.completed) {
            newTask.classList.add("completed");
        }

        newTask.innerText = taskText;

        newTask.addEventListener('click', () => {
            newTask.classList.toggle('completed');

            updateLocalStorage();
        });

        newTask.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            newTask.remove();

            updateLocalStorage();
        });

        tasksAll.appendChild(newTask);
        input.value = "";

        updateLocalStorage();
    }
}

function updateLocalStorage() {
    const tasksEl = document.querySelectorAll("li");

    const tasks = [];
    tasksEl.forEach((taskEach) => {
        tasks.push({
            text: taskEach.innerText,
            taskStatus: taskEach.classList.contains("completed"),
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}