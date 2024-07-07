const taskList = [
    { id: Date.now() + 1, name: "Lavar la ropa", completed: false },
    { id: Date.now() + 2, name: "Barrer mi cuarto", completed: false },
    { id: Date.now() + 3, name: "Darme una ducha", completed: false }
];
const inputTarea = document.getElementById('input-tarea');
const botonAgregar = document.getElementById('boton-agregar');
const taskListDiv = document.getElementById('task-list');
const totalCounter = document.getElementById('total');
const realizadasCounter = document.getElementById('realizadas');

/* Contador total de tareas*/
function updateCounters() {
        totalCounter.innerHTML = `${taskList.length}`;
        realizadasCounter.innerHTML = `${taskList.filter(task => task.completed).length}`;
}
/* Renderiza cada nuevo objeto que se agrege */
function renderTasks() {
    taskListDiv.innerHTML = '';
    taskList.forEach(task => {
    const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
    const taskId = document.createElement('div');
        taskId.className = 'task-id';
        taskId.textContent = task.id;
        taskItem.appendChild(taskId);
    const taskName = document.createElement('div');
        taskName.className = 'task-name';
        taskName.innerHTML = task.name;
        taskItem.appendChild(taskName);
    const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener('change', () => {
            task.completed = taskCheckbox.checked;
    updateCounters();
});
/* Botón para borrar */
    const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
    const taskIndex = taskList.findIndex(t => t.id === task.id);
        taskList.splice(taskIndex, 1);
    renderTasks();
    updateCounters();
});
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(deleteBtn);
    taskListDiv.appendChild(taskItem);
});}
/* Botón para agregar */
botonAgregar.addEventListener('click', () => {
    const taskName = inputTarea.value.trim();
    if (taskName) {
        const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    };
    taskList.push(newTask);
        renderTasks();
        updateCounters();
        inputTarea.value = '';
    }
});
renderTasks();
updateCounters();