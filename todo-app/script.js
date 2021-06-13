const form = document.getElementById('form');
const input = document.getElementById('input');
const tasks = document.getElementById('tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTasks();
});

function addTasks() {
    const taskText = input.value;

    if (taskText) {
        const newTask = document.createElement("li");
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

        tasks.appendChild(newTask);
        input.value = "";

        updateLocalStorage();
    }
}

function updateLocalStorage(){
    const tasksEl=document.querySelectorAll("li");

    const tasks=[];
    tasksEl.forEach((task)=>{
        tasks.push({
            text: task.innerText,
            taskStatus: task.classList.contains("completed"),
        });
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
}