const taskForm = document.querySelector("#taskForm");
const taskContainer = document.querySelector("#taskContainer");
const taskInput = taskForm["name"];
const timeInput = taskForm["time"];
const dateInput = taskForm["date"];




const DOM = JSON.parse(localStorage.getItem("TaskList")) || [];

const addTask = (name, time, date, id) => {

  DOM.push({
    name,
    time,
    date,
    id
  });
  localStorage.setItem("TaskList", JSON.stringify(DOM));

  return { name, time, date, id };
};




const createTaskElement = ({ name, time, date, id }) => {

  const removeBtn = document.createElement("button");
  const taskDiv = document.createElement("div");
  const taskName = document.createElement("span");
  const taskTime = document.createElement("p");
  const taskDate = document.createElement("p");


  taskName.innerText = name;
  taskTime.innerText = "Time : " + time;
  taskDate.innerText = "Date : " + date;

  removeBtn.classList.add("btn-close");
  removeBtn.setAttribute("id", "removeBtn");

  taskName.classList.add("text-wrap", "font-monospace", "fst-italic", "badge");
  taskTime.classList.add("text-wrap", "font-monospace", "fst-italic", "badge", "text-start");
  taskDate.classList.add("text-wrap", "font-monospace", "fst-italic", "badge", "text-start");


  taskDiv.append(removeBtn, taskName, taskTime, taskDate);
  taskContainer.appendChild(taskDiv);

  taskContainer.style.display = DOM.length === 0 ? "none" : "flex";


  removeBtn.addEventListener("click", (id) => {
    // taskContainer.removeChild(taskDiv);

    // remove tasknote from dashboard!



    DOM.filter(newTask => newTask.id != id);
  }
  );
};





function getId() {
  const id = Math.floor(Math.random() * 80);
  return id
}



taskContainer.style.display = DOM.length === 0 ? "none" : "flex";

DOM.forEach(createTaskElement);

taskForm.onsubmit = (e) => {
  e.preventDefault();

  const newTask = addTask(taskInput.value, timeInput.value, dateInput.value, getId());

  createTaskElement(newTask);

  taskInput.value = "";
  timeInput.value = "";
  dateInput.value = "";
};

taskForm.onreset = (e) => {
  taskInput.value = "";
  timeInput.value = "";
  dateInput.value = "";
};


