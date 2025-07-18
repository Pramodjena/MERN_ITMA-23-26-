// Create an array to store task
let tasks = [];

// Dom Element
const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// DOM event when page loads
document.addEventListener("DOMContentLoaded", (e) => {
  loadTasks();
  renderTasks();
});

// Add events
inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskFromInput();
});
addBtn.addEventListener("click", addTaskFromInput);

function addTaskFromInput() {
  const taskText = inputTask.value.trim();
  if (taskText) {
    addTask(taskText);
    inputTask.value = "";
  }
}

function addTask(taskText) {
  const task = {
    id: Date.now(),
    text: taskText,
    isComplete: false,
  };
  tasks.push(task);
  saveTask();
  renderTasks();
}

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  tasks = storedTasks ? JSON.parse(storedTasks) : [];
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    if (task.isComplete) {
      li.classList.add("completed");
    }

    li.innerHTML = `
    <span> ${task.text} </span>
    <div> 
    <button class="toggleBtn"> ${
      task.isComplete ? "Undo" : "Complete"
    } </button>
    <button class="deleteBtn"> Delete </button>
    </div>
    `;

    taskList.appendChild(li);
  });
}
