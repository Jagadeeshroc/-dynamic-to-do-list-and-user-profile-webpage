

let myArrow=
{imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png" ,
    Name:'Vanganooru Jagadeesh',
    age :25
};
let bgContainerEl=document.getElementById("bg-container");
let imageContainerEl=document.getElementById("image-container");

let imageElement = document.createElement("img");
imageElement.value = myArrow.imgSrc;
imageElement.setAttribute("src", imageElement.value);
imageElement.classList.add("image");
imageContainerEl.appendChild(imageElement);

let mainHeadEl=document.createElement("h1");
mainHeadEl.textContent=myArrow.Name;
mainHeadEl.classList.add("head");
imageContainerEl.appendChild(mainHeadEl);

let paraEl=document.createElement("h1");
paraEl.textContent="Age: "+ myArrow.age;
paraEl.classList.add("para");
imageContainerEl.appendChild(paraEl);


let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  labelElement.classList.toggle('checked');
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);

  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = 'todo' + todo.uniqueNo;
  let checkboxId = 'checkbox' + todo.uniqueNo;
  let labelId = 'label' + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId);
  }

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if(userInputValue === ""){
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount
  };

  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function(){
  onAddTodo();
}