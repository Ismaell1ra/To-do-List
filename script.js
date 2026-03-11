const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === '') {
    alert("Você deve digitar algo!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";

    listContainer.appendChild(li);
    li.appendChild(span);
    li.appendChild(editBtn);
  }
  inputbox.value = "";
  saveData()
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
  else if (e.target.tagName === "BUTTON") {

  let li = e.target.parentElement;

  let newText = prompt("Editar tarefa:", li.firstChild.textContent);

  if(newText !== null && newText !== ""){
    li.firstChild.textContent = newText;
    saveData();
  }
}
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();